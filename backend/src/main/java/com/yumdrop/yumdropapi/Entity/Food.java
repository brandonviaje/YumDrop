package com.yumdrop.yumdropapi.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@Data
@Builder
@NoArgsConstructor
@Document(collection = "foods")
public class Food {
    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private String category;
    private String imageUrl;
}
