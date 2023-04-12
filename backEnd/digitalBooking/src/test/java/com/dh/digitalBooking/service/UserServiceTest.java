package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.UserDTO;
import com.dh.digitalBooking.entity.User;
import com.dh.digitalBooking.repository.UserRepository;
import com.dh.digitalBooking.util.UserUtil;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @InjectMocks
    private UserService service;

    @Mock
    private UserRepository repository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private UserUtil userUtil;

    @Test
    void save() {
        //UserDTO userDTO = UserDTO.builder()
                //.name("Test User")
                //.lastName("Test")
                //.login("test@test.com")
                //.password("test123")
                //.build();

        //User user = User.builder()
                //.id(1L)
                //.name(userDTO.getName())
                //.lastName(userDTO.getLastName())
                //.login(userDTO.getLogin())
                //.password(userDTO.getPassword())
                //.build();
        //when(repository.save(any(User.class))).thenReturn(user);

        //UserDTO savedUserDTO = service.save(userDTO);

        //assertEquals(userDTO.getName(), savedUserDTO.getName());
        //assertEquals(userDTO.getLastName(), savedUserDTO.getLastName());
        //assertEquals(userDTO.getLogin(), savedUserDTO.getLogin());
        //assertEquals(userDTO.getPassword(), savedUserDTO.getPassword());
    }

    @Test
    void findAll() {
        User user = new User();
        when(repository.findAll()).thenReturn(List.of(user));

        List<UserDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        User user = new User();
        user.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(user));
        Optional<User> response = service.findById(1L);
        assertEquals(user,  response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }
}