package com.yumdrop.yumdropapi.Service;

import com.yumdrop.yumdropapi.DTO.UserRequest;
import com.yumdrop.yumdropapi.DTO.UserResponse;
import com.yumdrop.yumdropapi.Entity.User;
import com.yumdrop.yumdropapi.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    //Injections
    private final UserRepository userRepository;

    @Override
    public UserResponse registerUser(UserRequest request) {
        User newUser = convertToEntity(request);
        newUser = userRepository.save(newUser);
        return convertToResponse(newUser);
    }

    //Helpers
    private User convertToEntity(UserRequest request){
        return User.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .name(request.getName())
                .build();
    }

    private UserResponse convertToResponse(User user){
       return UserResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .build();
    }
}
