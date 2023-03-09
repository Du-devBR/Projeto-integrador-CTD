package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.ImageDTO;
import com.dh.digitalBooking.entity.Image;
import org.modelmapper.ModelMapper;

public class ImageUtil {

    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static ImageDTO convertToDTO(Image image){
        return MODEL_MAPPER.map(image, ImageDTO.class);
    }
    public static Image convetToEntity(ImageDTO imageDTO){
        return MODEL_MAPPER.map(imageDTO, Image.class);
    }
}
