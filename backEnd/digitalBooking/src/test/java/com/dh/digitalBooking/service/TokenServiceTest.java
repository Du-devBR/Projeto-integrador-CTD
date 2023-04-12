package com.dh.digitalBooking.service;

import com.dh.digitalBooking.entity.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class TokenServiceTest {

    @Test
    void generatorToken() {
        User user = new User();
        user.setLogin("test@test.com");
        user.setName("Test");
        user.setLastName("User");
        String jwtSecrets = "mySecret";
        TokenService service = new TokenService();
        ReflectionTestUtils.setField(service, "jwtSecrets", jwtSecrets);
        String token = service.generatorToken(user);
        assertNotNull(token);
    }

    @Test
    void getSubject() {
        User user = new User();
        user.setLogin("test@test.com");
        user.setName("Test");
        user.setLastName("User");
        String jwtSecrets = "mySecret";
        TokenService service = new TokenService();
        ReflectionTestUtils.setField(service, "jwtSecrets", jwtSecrets);
        String token = service.generatorToken(user);
        String subject = service.getSubject(token);
        assertEquals(user.getLogin(), subject);
    }
}