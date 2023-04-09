package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.AuthResponseDTO;
import com.dh.digitalBooking.dto.UserAuthDTO;
import com.dh.digitalBooking.entity.User;
import com.dh.digitalBooking.service.TokenService;
import jakarta.validation.Valid;
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

    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    public AuthController(AuthenticationManager authenticationManager, TokenService tokenService) {
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    @PostMapping("/login")
    public AuthResponseDTO login(@RequestBody @Valid UserAuthDTO userAuthDTO) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(userAuthDTO.getLogin(), userAuthDTO.getPassword());
        Authentication authenticate = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        var user = (User) authenticate.getPrincipal();
        String token = tokenService.generatorToken(user);
        Long userId = user.getId();
        Long roleId = user.getRole().getId();
        return new AuthResponseDTO(token, userId, roleId);
    }
}
