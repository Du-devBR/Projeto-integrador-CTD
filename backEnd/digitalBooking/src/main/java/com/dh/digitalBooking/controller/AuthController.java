package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.UserAuthDTO;
import com.dh.digitalBooking.entity.User;
import com.dh.digitalBooking.service.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired private AuthenticationManager authenticationManager;
    @Autowired private TokenService tokenService;
    @PostMapping("/login")
    public String login(@RequestBody @Valid UserAuthDTO userAuthDTO) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(userAuthDTO.getLogin(), userAuthDTO.getPassword());
        Authentication authenticate = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        var user = (User) authenticate.getPrincipal();
        return tokenService.generatorToken(user);
    }
}
