package com.yumdrop.yumdropapi.Service;

import com.yumdrop.yumdropapi.DTO.CartRequest;
import com.yumdrop.yumdropapi.DTO.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    CartResponse removeFromCart(CartRequest request);

    void clearCart();
}
