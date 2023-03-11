package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.RoleDTO;
import com.dh.digitalBooking.entity.Role;
import org.modelmapper.ModelMapper;

/**
 This class provides utility methods for converting between Role and RoleDTO entities.
 */
public class RoleUtil {

    /**
     A ModelMapper instance used for converting Role entities to RoleDTO entities.
     */
    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    /**
     Converts the given Role entity to a RoleDTO entity.
     @param role the Role entity to be converted.
     @return the corresponding RoleDTO entity.
     */
    public static RoleDTO convertToDTO(Role role) {
        return MODEL_MAPPER.map(role, RoleDTO.class);
    }

    /**
     Converts the given RoleDTO entity to a Role entity.
     @param roleDTO the RoleDTO entity to be converted.
     @return the corresponding Role entity.
     */
    public static Role convertToEntity(RoleDTO roleDTO){
        return MODEL_MAPPER.map(roleDTO, Role.class);
    }
}
