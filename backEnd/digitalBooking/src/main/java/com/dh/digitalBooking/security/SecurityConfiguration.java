package com.dh.digitalBooking.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 A configuration class that provides basic security configuration for the application.
 This class configures the authentication and authorization settings using in-memory users and roles.
 The class also provides a SecurityFilterChain bean for configuring the HttpSecurity object.
 @see org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
 @see org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
 @see org.springframework.security.config.annotation.web.builders.HttpSecurity
 @see org.springframework.security.config.annotation.web.configurers.SecurityContextConfigurer
 @see org.springframework.security.crypto.password.PasswordEncoder
 @author [seu nome aqui]
 @version 1.0
 @since [data de criação]
 */
@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    /**
     The PasswordEncoder object used to encode and decode user passwords.
     */
    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     Registers in-memory users and roles with the AuthenticationManagerBuilder.
     Configures two users: "user" with role "USER" and "admin" with role "ADMIN".
     User passwords are encoded using the PasswordEncoder object.
     @param auth the AuthenticationManagerBuilder object to use for registration
     @throws Exception if an error occurs while registering users
     */
    @Autowired
    public void regiterGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user")
                .password(passwordEncoder.encode("123456"))
                .roles("USER")
                .and()
                .withUser("admin")
                .password(passwordEncoder.encode("tchothcozaManda"))
                .roles("ADMIN");
    }

    /**
     Creates and returns a SecurityFilterChain bean for configuring the HttpSecurity object.
     Configures security settings for HTTP requests, including URL access and authentication requirements.
     @param http the HttpSecurity object to use for security configuration
     @return a SecurityFilterChain object for configuring the HttpSecurity object
     @throws Exception if an error occurs while configuring security settings
     */
     @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests()
                    .requestMatchers(HttpMethod.GET, "/api/**").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/**").hasAnyRole("USER", "ADMIN")
                    .requestMatchers(HttpMethod.DELETE, "/api/**").hasRole("ADMIN")
                    .anyRequest().authenticated()
                    .and()
                .httpBasic()
                    .and()
                .csrf().disable()
                .build();
    }
}
