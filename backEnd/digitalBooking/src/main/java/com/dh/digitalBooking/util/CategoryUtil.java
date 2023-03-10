package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.CategoryDTO;
import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.entity.Image;
import com.dh.digitalBooking.repository.ImageRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


/**
 This class provides utility methods for converting between
 Category and CategoryDTO entities.
 */
@Component
public class CategoryUtil {

    @Autowired private ImageRepository imageRepository;

    /**
     * A ModelMapper instance used for converting Category entities to CategoryDTO entities.
     */
    private static final ModelMapper MODEL_MAPPER = new ModelMapper();


    /**
     * Converts the given Category entity to a CategoryDTO entity.
     *
     * @param category the Category entity to be converted.
     * @return the corresponding CategoryDTO entity.
     */
    public static CategoryDTO convertToDTO(Category category) {
        return MODEL_MAPPER.map(category, CategoryDTO.class);
    }

    /**
     * Converts the given CategoryDTO entity to a Category entity.
     *
     * @param categoryDTO the CategoryDTO entity to be converted.
     * @return the corresponding Category entity.
     */
    public Category convertToEntity(CategoryDTO categoryDTO) {
        Category category = MODEL_MAPPER.map(categoryDTO, Category.class);
        if (categoryDTO.getImageID() != null) {
            Image image = imageRepository.findById(categoryDTO.getImageID())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid image ID: " + categoryDTO.getImageID()));
            category.setImageURL(image);
        }
        return category;
    }


}
