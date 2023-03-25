package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.RegulationDTO;
import com.dh.digitalBooking.entity.Regulation;
import org.modelmapper.ModelMapper;

public class RegulationUtil {

    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static RegulationDTO convertToDTO(Regulation regulation){
        return MODEL_MAPPER.map(regulation, RegulationDTO.class);
    }

    public static Regulation convertToEntity(RegulationDTO regulationDTO){
        return MODEL_MAPPER.map(regulationDTO, Regulation.class);
    }
}
