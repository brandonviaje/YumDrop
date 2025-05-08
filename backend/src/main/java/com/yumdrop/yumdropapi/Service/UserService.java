package com.yumdrop.yumdropapi.Service;

import com.yumdrop.yumdropapi.DTO.UserRequest;
import com.yumdrop.yumdropapi.DTO.UserResponse;

public interface UserService {
    UserResponse registerUser(UserRequest request);
}
