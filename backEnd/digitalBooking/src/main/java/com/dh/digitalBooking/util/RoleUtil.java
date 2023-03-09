package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.RoleDTO;
import com.dh.digitalBooking.entity.Role;
import org.modelmapper.ModelMapper;

public class RoleUtil {
    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static RoleDTO convertToDTO(Role role) {
        return MODEL_MAPPER.map(role, RoleDTO.class);
    }

    public static Role convertToEntity(RoleDTO roleDTO){
        return MODEL_MAPPER.map(roleDTO, Role.class);
    }
}
