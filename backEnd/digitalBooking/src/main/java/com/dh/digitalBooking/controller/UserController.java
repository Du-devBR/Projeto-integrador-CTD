package com.dh.digitalBooking.controller;


import com.dh.digitalBooking.dto.UserDTO;
import com.dh.digitalBooking.service.UserService;
import com.dh.digitalBooking.util.UserUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**

 The UserController class is responsible for handling all HTTP requests related to User resources.
 It is annotated with @RestController to indicate that it is a RESTful controller. The base URL for all requests is /api/usuario.
 This class injects a UserService instance using @Autowired, which is responsible for performing business logic operations
 related to User resources.

 The HTTP methods supported by this controller include:
 POST /registro: creates a new user and returns its DTO representation.
 GET /: retrieves all existing users and returns their DTO representations in a List.
 GET /{id}: retrieves the user with the specified ID and returns its DTO representation, or throws a ResponseStatusException if not found.
 DELETE /{id}: deletes the user with the specified ID or throws a ResponseStatusException if not found.
 PUT /{id}: updates the user with the specified ID with the information provided in the request body and returns a HTTP status of NO_CONTENT.

 This class is also annotated with @Slf4j, which generates a logger for the class.
 */

@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/api/usuario")
public class UserController {

    /**
     This field is automatically injected with an instance of UserService using @Autowired.
     It is used to perform business logic operations related to User resources.
     */
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     This method creates a new user with the information provided in the request body.
     It returns the created user's DTO representation.
     @param userDTO a DTO object containing the user's information to be created.
     @return the DTO representation of the created user.
     */
    @PostMapping("/registro")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDTO save(@Valid @RequestBody UserDTO userDTO){
        log.info("Create User: %s".formatted(userDTO.getName()));
        return userService.save(userDTO);
    }

    /**
     This method retrieves all existing users and returns their DTO representations in a List.
     @return a List of DTO representations of all existing users.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<UserDTO> listUser(){
        log.info("Find All Users");
        return userService.findAll();
    }

    /**
     This method retrieves the user with the specified ID and returns its DTO representation.
     If the user is not found, it throws a ResponseStatusException with HTTP status NOT_FOUND.
     @param id the ID of the user to be retrieved.
     @return the DTO representation of the retrieved user.
     @throws ResponseStatusException if the user with the specified ID is not found.
     */
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserDTO findUserById(@PathVariable("id") Long id) {
        log.info("Find User by ID: %d".formatted(id));
        return userService.findById(id)
                .map(UserUtil::convertToDTO)
                .orElseThrow(() ->  new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

    /**
     This method deletes the user with the specified ID.
     If the user is not found, it throws a ResponseStatusException with HTTP status NOT_FOUND.
     @param id the ID of the user to be deleted.
     @throws ResponseStatusException if the user with the specified ID is not found.
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable("id") Long id) {
        log.info("Delete Category by ID: %d".formatted(id));
        userService.findById(id)
                .map(categoryFoundOnBase -> {
                    userService.deleteById(categoryFoundOnBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

    /**
     Route to update an existing user.
     @param id a Long representing the ID of the category to be updated.
     @param userDTO a CategoryDTO object representing the updated category.
     @throws ResponseStatusException if the category is not found.
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateUser(@PathVariable("id") Long id,
                               @Valid @RequestBody UserDTO userDTO) {
        log.info("Update Category by ID: %d".formatted(id));
        userService.findById(id)
                .map(categoryFoundOnBase -> {
                    userService.save(userDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }
}
