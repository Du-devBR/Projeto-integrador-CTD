package com.dh.digitalBooking.security;

import com.dh.digitalBooking.repository.UserRepository;
import com.dh.digitalBooking.service.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;

/**
 This class represents a filter to extract the JWT token from the Authorization header and authenticate the user
 using Spring Security.
 It extends OncePerRequestFilter class from Spring Security.
 */
@Component
public class FilterToken extends OncePerRequestFilter {

    private final TokenService tokenService;
    private final UserRepository userRepository;

    /**

     Constructor of the FilterToken class that initializes the TokenService and UserRepository fields.
     @param tokenService the service used to generate and verify JWT tokens.
     @param userRepository the repository used to retrieve user data from the database.
     */
    public FilterToken(TokenService tokenService, UserRepository userRepository) {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    }

    /**

     Method responsible for extracting the JWT token from the Authorization header and authenticating the user
     using Spring Security.
     @param request the current HTTP request.
     @param response the current HTTP response.
     @param filterChain the chain of filters to be applied to the request.
     @throws ServletException in case of any servlet exception.
     @throws IOException in case of any I/O exception.
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        String token;

        var authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader != null) {
            token = authorizationHeader.replace("Bearer ", "");
            var subject = this.tokenService.getSubject(token);
            var user = this.userRepository.findByLogin(subject)
                    .orElseThrow(() ->  new ResponseStatusException(HttpStatus.NOT_FOUND, "unregistered user"));
            var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authentication);

        }

        filterChain.doFilter(request, response);

    }
}
