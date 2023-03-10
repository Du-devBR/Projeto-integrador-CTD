package com.dh.digitalBooking.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 A DTO (Data Transfer Object) class representing a category.
 Contains basic information about the category, including
 its ID, description, and image URL.
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
     A name of the category.
     */
    private String name;

    /**
     The URL of the category's image.
     */
    private Long imageID;
}
