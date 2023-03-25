package com.dh.digitalBooking.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 The UserDTO class represents a Data Transfer Object (DTO) for a user.
 It is used to transfer user data between different layers of the application.
 The class is annotated with @Data, @AllArgsConstructor, @NoArgsConstructor,
 and @Builder annotations.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {

    /**
     The id of the user.
     */
    private Long id;

    /**
     The name of the user.
     */
    private String name;

    /**
     The last name of the user.
     */
    private String lastName;

    /**
     The email of the user.
     */
    private String login;

    /**
     * The Password
     */
    private String password;

    /**
     The image's Id of the user.
     */
    private Long imageId;

    /**
     The role's ID of the user.
     */
    private Long roleId;
}
