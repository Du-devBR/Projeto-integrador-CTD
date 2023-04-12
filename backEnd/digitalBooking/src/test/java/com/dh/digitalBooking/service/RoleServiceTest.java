package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.RoleDTO;
import com.dh.digitalBooking.entity.Role;
import com.dh.digitalBooking.repository.RoleRepository;
import com.dh.digitalBooking.util.RoleUtil;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RoleServiceTest {

    @InjectMocks
    private RoleService service;

    @Mock
    private RoleRepository repository;

    @Test
    void save() {
        RoleDTO roleDTO = new RoleDTO();
        roleDTO.setId(1L);
        Role role = RoleUtil.convertToEntity(roleDTO);
        when(repository.save(role)).thenReturn(role);
        RoleDTO response = service.save(roleDTO);
        assertEquals(response, roleDTO);
    }

    @Test
    void findAll() {
        Role role = new Role();
        when(repository.findAll()).thenReturn(List.of(role));
        List<RoleDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        Role role = new Role();
        role.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(role));
        Optional<Role> response = service.findById(1L);
        assertEquals(role, response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }
}