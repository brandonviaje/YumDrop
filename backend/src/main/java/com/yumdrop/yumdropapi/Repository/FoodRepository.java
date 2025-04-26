package com.yumdrop.yumdropapi.Repository;

import com.yumdrop.yumdropapi.Entity.Food;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends MongoRepository<Food, String> {
}
