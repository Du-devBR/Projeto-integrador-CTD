package com.dh.digitalBooking.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.dh.digitalBooking.entity.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
    @Value("${jwt.secrets}")
    private String jwtSecrets;
    public String generatorToken(User user) {
        return JWT.create()
                .withIssuer("DigitalBooking")
                .withSubject(user.getLogin())
                .withClaim("nome", user.getName())
                .withClaim("sobrenome", user.getLastName())
                .withExpiresAt(LocalDateTime.now()
                        .plusMinutes(30)
                        .toInstant(ZoneOffset.of("-03:00")))
                .sign(Algorithm.HMAC256(jwtSecrets));
    }

    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256(jwtSecrets))
                .withIssuer("DigitalBooking")
                .build().verify(token).getSubject();
    }
}
