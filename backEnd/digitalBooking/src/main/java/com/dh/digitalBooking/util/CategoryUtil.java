package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.CategoryDTO;
import com.dh.digitalBooking.entity.Category;
import org.modelmapper.ModelMapper;

public class CategoryUtil {
    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static CategoryDTO convertToDTO(Category category){
        return MODEL_MAPPER.map(category, CategoryDTO.class);
    }

    public static Category convertToEntity(CategoryDTO categoryDTO){
        return MODEL_MAPPER.map(categoryDTO, Category.class);
    }
}
