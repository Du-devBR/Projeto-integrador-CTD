package com.dh.digitalBooking.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**

 This class represents a DTO (Data Transfer Object) for the Role entity.
 It contains information related to the Role entity that is passed between different layers
 of the application, such as the controller and the service layers.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RoleDTO {
    /**
    The unique identifier of the Role entity.
    */
    private Long id;

    /**
     The name of the Role entity.
     */
    private String Name;

    /**
     The description of the Role entity.
     */
    private String Description;
}
