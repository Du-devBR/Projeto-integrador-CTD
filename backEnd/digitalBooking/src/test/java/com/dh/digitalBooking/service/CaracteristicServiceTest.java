package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.CaracteristicDTO;
import com.dh.digitalBooking.entity.Caracteristic;
import com.dh.digitalBooking.repository.CaracteristicRepository;
import com.dh.digitalBooking.util.CaracteristicUtil;
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
class CaracteristicServiceTest {

    @InjectMocks
    private CaracteristicService service;

    @Mock
    private CaracteristicRepository repository;


    @Test
    void save() {
        CaracteristicDTO caracteristicDTO = new CaracteristicDTO();
        caracteristicDTO.setId(1L);
        Caracteristic caracteristic = CaracteristicUtil.convertToEntity(caracteristicDTO);
        when(repository.save(caracteristic)).thenReturn(caracteristic);
        CaracteristicDTO response = service.save(caracteristicDTO);
        assertEquals(caracteristicDTO, response);
    }

    @Test
    void findAll() {
        Caracteristic caracteristic = new Caracteristic();
        when(repository.findAll()).thenReturn(List.of(caracteristic));

        List<CaracteristicDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        Caracteristic caracteristic = new Caracteristic();
        caracteristic.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(caracteristic));
        Optional<Caracteristic> response = service.findById(1L);
        assertEquals(caracteristic,  response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }


}