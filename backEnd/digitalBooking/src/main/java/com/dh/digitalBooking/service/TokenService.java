package com.dh.digitalBooking.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.dh.digitalBooking.entity.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

/**

 The TokenService class is responsible for generating and validating JWT tokens for user authentication.
 The class is annotated with @Service annotation.
 */
@Service
public class TokenService {
    /**
     * The secret key used for signing the JWT token.
     */
    @Value("${jwt.secrets}")
    private String jwtSecrets;

    /**
     * Generates a new JWT token for the given user.
     * @param user The user to generate the token for.
     * @return The generated JWT token.
     */
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

    /**
     * Returns the subject of the given JWT token.
     * @param token The JWT token to extract the subject from.
     * @return The subject of the JWT token.
     */
    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256(jwtSecrets))
                .withIssuer("DigitalBooking")
                .build().verify(token).getSubject();
    }
}
