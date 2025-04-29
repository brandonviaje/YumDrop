package com.yumdrop.yumdropapi.Service;

import com.yumdrop.yumdropapi.DTO.FoodRequest;
import com.yumdrop.yumdropapi.DTO.FoodResponse;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

public interface FoodService {
    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest request, MultipartFile file);

    List<FoodResponse> readFoods();

    FoodResponse readFood(String id);

    void deleteFood(String id);

    boolean deleteFile(String filename);
}
