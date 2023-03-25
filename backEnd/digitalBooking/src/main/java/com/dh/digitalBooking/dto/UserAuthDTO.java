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
     The login of the user.
     */
    private String login;

    /**
     * The Password
     */
    private String password;
}
