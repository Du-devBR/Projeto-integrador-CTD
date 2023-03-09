package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.UserDTO;
import com.dh.digitalBooking.entity.User;
import com.dh.digitalBooking.repository.UserRepository;
import com.dh.digitalBooking.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 This class represents the service responsible for managing User-related requests.
 The service provides methods to save a new user, find all users, find a user by ID, and delete a user by ID.
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     Saves a new user to the database.
     @param userDTO a UserDTO object representing the user to be saved.
     @return a UserDTO object representing the saved user.
     */
    public UserDTO save(UserDTO userDTO){
        User user = UserUtil.convertToEntity(userDTO);
        return UserUtil.convertToDTO(userRepository.save(user));
    }

    /**
     Finds all users in the database.
     @return a list of UserDTO objects representing all users.
     */
    public List<UserDTO> findAll(){
        return userRepository.findAll()
                .stream()
                .map(UserUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     Finds a user by their ID.
     @param id a Long representing the ID of the user to be found.
     @return an Optional object containing a User object representing the found user.
     */
    public Optional<User> findById(Long id){
        return userRepository.findById(id);
    }

    /**
     Deletes a user by their ID.
     @param id a Long representing the ID of the user to be deleted.
     */
    public  void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
