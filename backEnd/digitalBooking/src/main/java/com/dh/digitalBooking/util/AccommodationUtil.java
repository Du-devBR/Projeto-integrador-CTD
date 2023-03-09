package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.AccommodationDTO;
import com.dh.digitalBooking.entity.Accommodation;
import org.modelmapper.ModelMapper;

public class AccommodationUtil {
    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static AccommodationDTO convertToDTO(Accommodation accommodation){
        return MODEL_MAPPER.map(accommodation, AccommodationDTO.class);
    }

    public static Accommodation convertToEntity(AccommodationDTO accommodationDTO){
        return MODEL_MAPPER.map(accommodationDTO, Accommodation.class);
    }
}
