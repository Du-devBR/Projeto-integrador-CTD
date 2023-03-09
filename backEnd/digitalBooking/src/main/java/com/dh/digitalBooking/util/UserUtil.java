package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.UserDTO;
import com.dh.digitalBooking.entity.User;
import org.modelmapper.ModelMapper;

/**
 The UserUtil class provides utility methods for converting User
 entities to UserDTOs and vice versa.
 */
public class UserUtil {

    /**
     The ModelMapper used for mapping User entities to UserDTOs and vice versa.
     */
    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    /**
     Converts a User entity to a UserDTO.
     @param user the User entity to convert
     @return the converted UserDTO
     */
    public static UserDTO convertToDTO(User user){
        return MODEL_MAPPER.map(user, UserDTO.class);
    }

    /**
     Converts a UserDTO to a User entity.
     @param userDTO the UserDTO to convert
     @return the converted User entity
     */
    public static User convertToEntity(UserDTO userDTO){
        return MODEL_MAPPER.map(userDTO, User.class);
    }
}
