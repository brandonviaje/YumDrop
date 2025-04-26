package com.yumdrop.yumdropapi.Service;

import com.yumdrop.yumdropapi.Entity.Food;
import com.yumdrop.yumdropapi.IO.FoodRequest;
import com.yumdrop.yumdropapi.IO.FoodResponse;
import com.yumdrop.yumdropapi.Repository.FoodRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {

    @Autowired
    private S3Client s3Client;

    @Autowired
    private FoodRepository foodRepository;

    @Value("${aws.s3.bucketname}")
    private String bucketName;

    /**
     * Uploads a file to the S3 bucket returns the public URL of the uploaded file.
     *
     * @param file the MultipartFile to upload
     * @return the public URL of the uploaded file
     * @throws ResponseStatusException if the upload fails or an I/O error occurs
     */
    @Override
    public String uploadFile(MultipartFile file) {
        //Grab file extension
        String fileExtension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+1);
        String key = UUID.randomUUID().toString()+"."+fileExtension;
        try{
            // Build S3 upload request
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .acl("public-read")
                    .contentType(file.getContentType())
                    .build();

            // Upload file to S3
            PutObjectResponse response = s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

            // If Successful, build the public URL, else throw an error
            if(response.sdkHttpResponse().isSuccessful()) {
                return "https://"+bucketName+".s3.amazonaws.com/"+key;
            }else{
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "File Upload Failed.");
            }

        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"An error occurred while uploading file");
        }
    }

    /**
     * Adds a new food item to the database with an uploaded image.
     *
     * @param request the FoodRequest containing food details (name, description, etc.)
     * @param file the image file to be uploaded and associated with the food item
     * @return the FoodResponse representing the newly created food item
     */
    @Override
    public FoodResponse addFood(FoodRequest request, MultipartFile file) {
        Food newFood = convertToEntity(request);
        String imageUrl = uploadFile(file);
        newFood.setImageUrl(imageUrl);
        newFood = foodRepository.save(newFood);
        return convertToResponse(newFood);
    }

    /**
     * Fetches all food items from the database and converts them into FoodResponse objects.
     *
     * @return a list of FoodResponse representing all food items
     */
    @Override
    public List<FoodResponse> readFoods() {
        List<Food> databaseEntries = foodRepository.findAll();
        return databaseEntries.stream().map(object -> convertToResponse(object)).collect(Collectors.toList());
    }

    /**
     * Fetches a single food item by its ID and converts it into a FoodResponse.
     *
     * @param id the ID of the food item to fetch
     * @return the FoodResponse representing the requested food item
     * @throws RuntimeException if no food is found for the given ID
     */
    @Override
    public FoodResponse readFood(String id) {
        Food existingFood = foodRepository.findById(id).orElseThrow(() -> new RuntimeException("Food not found for the id:" +id));
        return convertToResponse(existingFood);
    }

    /**
     * Deletes a food item by its ID.
     *
     * First deletes the associated image from the S3 bucket,
     * and only then deletes the food record from the database.
     *
     * @param id the ID of the food item to delete
     */
    @Override
    public void deleteFood(String id) {
        FoodResponse response = readFood(id);
        String imageUrl = response.getImageUrl();
        //parse filename
        String fileName = imageUrl.substring(imageUrl.lastIndexOf("/")+1);
        boolean isFileDeleted = deleteFile(fileName); //delete from s3 bucket

        if(isFileDeleted) {
            //Delete from DB aswell after deleted from S3 bucket.
            foodRepository.deleteById(response.getId());
        }
    }

    /**
     * Deletes a file from the S3 bucket.
     *
     * @param filename the name of the file to be deleted from S3.
     * @return true if the file deletion request is sent successfully.
     */
    @Override
    public boolean deleteFile(String filename) {
        DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                .bucket(bucketName)
                .key(filename).build();

        s3Client.deleteObject(deleteObjectRequest);
        return true;
    }

    //Helper Methods

    /**
     * Converts a FoodRequest DTO into a Food entity object.
     *
     * @param request the incoming FoodRequest containing food data
     * @return a Food entity ready to be saved in the database
     */
    private Food convertToEntity(FoodRequest request) {
        return Food.builder()
                .name(request.getName())
                .description(request.getDescription())
                .category(request.getCategory())
                .price(request.getPrice())
                .build();
    }

    /**
     * Converts a Food entity into a FoodResponse DTO.
     *
     * @param entity the Food entity fetched from the database
     * @return a FoodResponse DTO to send back to the client
     */
    private FoodResponse convertToResponse(Food entity) {
        return FoodResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .description(entity.getDescription())
                .category(entity.getCategory())
                .price(entity.getPrice())
                .imageUrl(entity.getImageUrl())
                .build();
    }
}
