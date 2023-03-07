package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.ImageDTO;
import com.dh.digitalBooking.entity.ImageModel;
import org.modelmapper.ModelMapper;

import java.awt.*;

public class ImageUtil {

    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static ImageDTO convertToDTO(ImageModel imageModel){
        return MODEL_MAPPER.map(imageModel, ImageDTO.class);
    }
    public static ImageModel convetToEntity(ImageDTO imageDTO){
        return MODEL_MAPPER.map(imageDTO, ImageModel.class);
    }
}
