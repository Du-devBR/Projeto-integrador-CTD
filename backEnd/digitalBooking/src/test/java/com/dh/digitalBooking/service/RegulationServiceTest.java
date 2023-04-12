package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.RegulationDTO;
import com.dh.digitalBooking.entity.Regulation;
import com.dh.digitalBooking.repository.RegulationRepository;
import com.dh.digitalBooking.util.RegulationUtil;
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
class RegulationServiceTest {

    @InjectMocks
    private RegulationService service;

    @Mock
    private RegulationRepository repository;

    @Test
    void save() {
        RegulationDTO regulationDTO = new RegulationDTO();
        regulationDTO.setId(1L);
        Regulation regulation = RegulationUtil.convertToEntity(regulationDTO);
        when(repository.save(regulation)).thenReturn(regulation);
        RegulationDTO respose = service.save(regulationDTO);
        assertEquals(regulationDTO, respose);
    }

    @Test
    void findAll() {
        Regulation regulation = new Regulation();
        when(repository.findAll()).thenReturn(List.of(regulation));

        List<RegulationDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        Regulation regulation = new Regulation();
        regulation.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(regulation));
        Optional<Regulation> response = service.findById(1L);
        assertEquals(regulation,  response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }
}