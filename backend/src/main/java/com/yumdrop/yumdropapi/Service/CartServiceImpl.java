package com.yumdrop.yumdropapi.Service;

import com.yumdrop.yumdropapi.DTO.CartRequest;
import com.yumdrop.yumdropapi.DTO.CartResponse;
import com.yumdrop.yumdropapi.Entity.CartEntity;
import com.yumdrop.yumdropapi.Repository.CartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CartServiceImpl implements  CartService{

    //Injections
    private final CartRepository cartRepository;
    private final UserService userService;

    @Override
    public CartResponse addToCart(CartRequest request) {
        String loggedInUserId = userService.findByUserId();
        Optional<CartEntity> cartOptional =  cartRepository.findByUserId(loggedInUserId);
        CartEntity cart = cartOptional.orElseGet(() -> new CartEntity(loggedInUserId,new HashMap<>()));
        Map<String,Integer> cartItems = cart.getItems();
        cartItems.put(request.getFoodId(), cartItems.getOrDefault(request.getFoodId(), 0) + 1);
        cart.setItems(cartItems);
        cart = cartRepository.save(cart);
        return convertToResponse(cart);
    }

    @Override
    public CartResponse getCart() {
        String loggedInUserId = userService.findByUserId();
        CartEntity entity = cartRepository.findByUserId(loggedInUserId).orElse(new CartEntity(null,loggedInUserId,new HashMap<>()));
        return convertToResponse(entity);
    }

    @Override
    public CartResponse removeFromCart(CartRequest request) {
        String loggedInUserId = userService.findByUserId();
        CartEntity entity = cartRepository.findByUserId(loggedInUserId).orElseThrow(() -> new RuntimeException("Cart is not found"));
        Map<String,Integer> cartItems = entity.getItems();
        if(cartItems.containsKey(request.getFoodId())){
            int currentQty = cartItems.get(request.getFoodId());
            if(currentQty > 0){ //if already 0 stop from there
                cartItems.put(request.getFoodId(), currentQty - 1);
            }else{
                cartItems.remove(request.getFoodId()); // remove from cart if 0
            }
        }
        return convertToResponse(cartRepository.save(entity));
    }

    @Override
    public void clearCart() {
        String loggedInUserId = userService.findByUserId();
        cartRepository.deleteByUserId(loggedInUserId);
        System.out.println("Cleared user " + loggedInUserId + "'s cart");
    }

    private CartResponse convertToResponse(CartEntity cart) {
        return CartResponse.builder()
                .id(cart.getId())
                .userId(cart.getUserId())
                .items(cart.getItems())
                .build();
    }
}
