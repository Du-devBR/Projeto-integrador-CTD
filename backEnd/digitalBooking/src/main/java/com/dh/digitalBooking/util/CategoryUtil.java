package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.CategoryDTO;
import com.dh.digitalBooking.entity.Category;
import org.modelmapper.ModelMapper;

/**
 This class provides utility methods for converting between Category and CategoryDTO entities.
 */
public class CategoryUtil {

    /**
     A ModelMapper instance used for converting Category entities to CategoryDTO entities.
     */
    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    /**
     Converts the given Category entity to a CategoryDTO entity.
     @param category the Category entity to be converted.
     @return the corresponding CategoryDTO entity.
     */
    public static CategoryDTO convertToDTO(Category category){
        return MODEL_MAPPER.map(category, CategoryDTO.class);
    }

    /**
     Converts the given CategoryDTO entity to a Category entity.
     @param categoryDTO the CategoryDTO entity to be converted.
     @return the corresponding Category entity.
     */
    public static Category convertToEntity(CategoryDTO categoryDTO){
        return MODEL_MAPPER.map(categoryDTO, Category.class);
    }
}
