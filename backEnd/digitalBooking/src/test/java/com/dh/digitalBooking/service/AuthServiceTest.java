package com.dh.digitalBooking.service;

import com.dh.digitalBooking.entity.User;
import com.dh.digitalBooking.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.junit.jupiter.api.Assertions.*;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @InjectMocks
    private AuthService service;
    @Mock
    private UserRepository repository;

    @Test
    void loadUserByUsername() {

        User user = new User();
        user.setLogin("johndoe");
        user.setPassword("nomadevirtual");

        when(repository.findByLogin("johndoe")).thenReturn(Optional.of(user));

        UserDetails response = service.loadUserByUsername("johndoe");
        assertEquals(user.getLogin(), response.getUsername());
        assertEquals(user.getPassword(), response.getPassword());
    }

    @Test
    void testLoadUsernameNotFound() {
        when(repository.findByLogin("invaliduser")).thenReturn(Optional.empty());

        assertThrows(UsernameNotFoundException.class, () -> {
            service.loadUserByUsername("invaliduser");
        });
    }
}