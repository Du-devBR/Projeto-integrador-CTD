package com.dh.digitalBooking.security;

import com.dh.digitalBooking.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

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
    @Autowired private PasswordEncoder passwordEncoder;

    @Autowired private AuthService authService;

    @Autowired private FilterToken filterToken;

    /**
     Creates and returns an AuthenticationManager bean that uses the AuthenticationManagerBuilder
     to authenticate users.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration auth) throws Exception {
        return auth.getAuthenticationManager();
    }

    /**
     Registers the authentication manager builder with the provided authentication service and password encoder.
     The authentication manager builder is used to configure in-memory users and roles.
     User details are retrieved from the provided authentication service and password encoder is used to encode user passwords.
     @param auth the AuthenticationManagerBuilder object to register
     @throws Exception if an error occurs while registering users
     */
    @Autowired
    public void regiterGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(authService)
                .passwordEncoder(passwordEncoder);
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
        return http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeHttpRequests()
                    .requestMatchers(HttpMethod.POST, "/api/login").permitAll()
                    .requestMatchers(HttpMethod.GET, "/api/**").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/**").hasAnyAuthority("ADMIN", "USER")
                    .requestMatchers(HttpMethod.DELETE, "/api/**").hasRole("ADMIN")
                    .anyRequest().authenticated().and()
                .addFilterBefore(filterToken, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
