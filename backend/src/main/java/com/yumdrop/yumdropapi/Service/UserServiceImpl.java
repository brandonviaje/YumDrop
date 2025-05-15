package com.yumdrop.yumdropapi.Service;

import com.yumdrop.yumdropapi.DTO.UserRequest;
import com.yumdrop.yumdropapi.DTO.UserResponse;
import com.yumdrop.yumdropapi.Entity.UserEntity;
import com.yumdrop.yumdropapi.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    //Injections
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponse registerUser(UserRequest request) {
        UserEntity newUserEntity = convertToEntity(request);
        newUserEntity = userRepository.save(newUserEntity);
        return convertToResponse(newUserEntity);
    }

    //Helpers
    private UserEntity convertToEntity(UserRequest request){
        return UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(request.getName())
                .build();
    }

    private UserResponse convertToResponse(UserEntity userEntity){
       return UserResponse.builder()
                .id(userEntity.getId())
                .email(userEntity.getEmail())
                .name(userEntity.getName())
                .build();
    }
}
