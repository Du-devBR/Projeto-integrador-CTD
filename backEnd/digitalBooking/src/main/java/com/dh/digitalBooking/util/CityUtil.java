package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.CityDTO;
import com.dh.digitalBooking.entity.City;
import org.modelmapper.ModelMapper;


public class CityUtil {

    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static CityDTO convertToDTO(City city) {
        return MODEL_MAPPER.map(city, CityDTO.class);
    }

    public  static City convertToEntity(CityDTO cityDTO) {
        return MODEL_MAPPER.map(cityDTO, City.class);
    }
}
