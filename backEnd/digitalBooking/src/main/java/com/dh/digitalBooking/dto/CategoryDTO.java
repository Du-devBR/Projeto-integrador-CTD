package com.dh.digitalBooking.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 A DTO (Data Transfer Object) class representing a category.
 Contains basic information about the category, including its ID, description, and image URL.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryDTO {
    /**
     The ID of the category.
     */
    private Long id;

    /**
     A brief description of the category.
     */
    private String description;

    /**
     The URL of the category's image.
     */
    private String imageURL;
}
