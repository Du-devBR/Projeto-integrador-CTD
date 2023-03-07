package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.ProductDTO;
import com.dh.digitalBooking.entity.Product;
import org.modelmapper.ModelMapper;

public class ProductUtil {

    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static ProductDTO convertToDTO(Product product){ return MODEL_MAPPER.map(product, ProductDTO.class);}

    public static Product convertToEntity(ProductDTO productDTO){
        return MODEL_MAPPER.map(productDTO, Product.class);
    }
}
