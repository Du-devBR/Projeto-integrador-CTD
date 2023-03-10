package com.dh.digitalBooking.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserAuthDTO {
    /**
     The id of the user.
     */
    private Long id;

    /**
     The email of the user.
     */
    private String email;

    /**
     * The Password
     */
    private String password;
}
