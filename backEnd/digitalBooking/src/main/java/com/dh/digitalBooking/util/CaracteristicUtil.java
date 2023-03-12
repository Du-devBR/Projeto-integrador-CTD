package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.CaracteristicDTO;
import com.dh.digitalBooking.entity.Caracteristic;
import org.modelmapper.ModelMapper;

public class CaracteristicUtil {
    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static CaracteristicDTO convertToDTO(Caracteristic caracteristic){
        return MODEL_MAPPER.map(caracteristic, CaracteristicDTO.class);
    }

    public static Caracteristic convertToEntity(CaracteristicDTO caracteristicDTO){
        return MODEL_MAPPER.map(caracteristicDTO, Caracteristic.class);
    }
}
