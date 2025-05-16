package com.yumdrop.yumdropapi.Service;

import com.yumdrop.yumdropapi.DTO.UserRequest;
import com.yumdrop.yumdropapi.DTO.UserResponse;
import com.yumdrop.yumdropapi.Entity.UserEntity;
import com.yumdrop.yumdropapi.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    //Injections
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationFacade authenticationFacade;

    @Override
    public UserResponse registerUser(UserRequest request) {
        UserEntity newUserEntity = convertToEntity(request);
        newUserEntity = userRepository.save(newUserEntity);
        return convertToResponse(newUserEntity);
    }

    @Override
    public String findByUserId() {
       String loggedInUserEmail = authenticationFacade.getAuthentication().getName();
       UserEntity loggedInUser = userRepository.findByEmail(loggedInUserEmail).orElseThrow(() -> new UsernameNotFoundException("User not found."));
       return loggedInUser.getId();
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
