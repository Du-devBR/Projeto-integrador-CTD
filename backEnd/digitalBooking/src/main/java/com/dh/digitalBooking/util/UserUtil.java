package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.UserDTO;
import com.dh.digitalBooking.entity.Image;
import com.dh.digitalBooking.entity.Role;
import com.dh.digitalBooking.entity.User;
import com.dh.digitalBooking.repository.ImageRepository;
import com.dh.digitalBooking.repository.RoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

/**
 The UserUtil class provides utility methods for converting User
 entities to UserDTOs and vice versa.
 */
@Slf4j
@Component
public class UserUtil {

    @Autowired private ImageRepository imageRepository;
    @Autowired private RoleRepository roleRepository;
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
    public  User convertToEntity(UserDTO userDTO){
        User user = MODEL_MAPPER.map(userDTO, User.class);
        if (userDTO.getRoleId() != null) {
            Optional<Role> role = roleRepository.findById(userDTO.getRoleId());
            if (role.isPresent()) {
                user.setRole(role.get());
            } else {
                log.error("Role not found for id: " + userDTO.getRoleId());
                throw new RuntimeException("Role not found for id: " + userDTO.getRoleId());
            }
        }
        if (userDTO.getImageId() != null) {
            Optional<Image> image = imageRepository.findById(userDTO.getImageId());
            if (image.isPresent()) {
                user.setImageURL(image.get());
            } else {
                log.error("Image not found for id: " + userDTO.getImageId());
                throw new RuntimeException("Image not found for id: " + userDTO.getImageId());
            }
        }
        return user;
    }


}
