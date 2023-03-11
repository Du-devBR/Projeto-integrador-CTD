package com.dh.digitalBooking.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 A configuration class that provides a PasswordEncoder bean for encoding and decoding passwords.
 Uses the BCryptPasswordEncoder implementation to encode passwords.
 @see org.springframework.security.crypto.password.PasswordEncoder
 @see org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
 @author Carlos Alberto Filho
 @version 1.0
 @since 09/03/2023
 */
@Configuration
public class EncoderConfig {

    /**
     Creates and returns a BCryptPasswordEncoder bean for encoding and decoding passwords.
     @return a BCryptPasswordEncoder object
     */
    @Bean public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
