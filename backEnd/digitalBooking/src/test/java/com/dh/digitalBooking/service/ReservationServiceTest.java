package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.ReservationDTO;
import com.dh.digitalBooking.entity.Reservation;
import com.dh.digitalBooking.repository.ReservationRepository;
import com.dh.digitalBooking.util.ReservationUtil;
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
class ReservationServiceTest {

    @InjectMocks
    private ReservationService service;

    @Mock
    private ReservationRepository repository;

    @Test
    void save() {
        ReservationDTO reservationDTO = new ReservationDTO();
        reservationDTO.setId(1L);
        Reservation reservation = ReservationUtil.convertToEntity(reservationDTO);
        when(repository.save(reservation)).thenReturn(reservation);
        ReservationDTO response = service.save(reservationDTO);
        assertEquals(reservationDTO, response);
    }

    @Test
    void findAll() {
        Reservation reservation = new Reservation();
        when(repository.findAll()).thenReturn(List.of(reservation));

        List<ReservationDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        Reservation reservation = new Reservation();
        reservation.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(reservation));
        Optional<Reservation> response = service.findById(1L);
        assertEquals(reservation,  response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }
}