package com.yumdrop.yumdropapi.Controller;

import com.yumdrop.yumdropapi.DTO.UserRequest;
import com.yumdrop.yumdropapi.DTO.UserResponse;
import com.yumdrop.yumdropapi.Service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@RequestBody UserRequest request){
        return userService.registerUser(request);
    }
}
