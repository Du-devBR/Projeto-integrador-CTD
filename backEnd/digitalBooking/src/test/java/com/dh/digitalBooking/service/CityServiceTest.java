package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.CityDTO;
import com.dh.digitalBooking.entity.City;
import com.dh.digitalBooking.repository.CityRepository;
import com.dh.digitalBooking.util.CityUtil;
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
class CityServiceTest {

    @InjectMocks
    private CityService service;

    @Mock
    private CityRepository repository;

    @Test
    void save() {
        CityDTO cityDTO = new CityDTO();
        cityDTO.setId(1L);
        City city = CityUtil.convertToEntity(cityDTO);
        when(repository.save(city)).thenReturn(city);
        CityDTO response = service.save(cityDTO);
        assertEquals(cityDTO, response);
    }

    @Test
    void findAll() {
        City city = new City();
        when(repository.findAll()).thenReturn(List.of(city));

        List<CityDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        City city = new City();
        city.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(city));
        Optional<City> response = service.findById(1L);
        assertEquals(city,  response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }
}