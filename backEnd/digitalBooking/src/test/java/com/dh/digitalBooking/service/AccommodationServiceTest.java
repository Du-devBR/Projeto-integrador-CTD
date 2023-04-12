package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.AccommodationDTO;
import com.dh.digitalBooking.entity.Accommodation;
import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.entity.City;
import com.dh.digitalBooking.repository.AccommodationRepository;
import com.dh.digitalBooking.util.AccommodationUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
public class AccommodationServiceTest {
    public static final long ID = 1L;
    public static final String QUARTO_STANDART = "QuartoStandart";
    public static final String QUALI = "cinco";
    @InjectMocks
    private AccommodationService service;

    @Mock
    private AccommodationRepository repository;
    @Mock
    private City city;
    @Mock
    private Category category;
    private Accommodation accommodation;
    private AccommodationDTO accommodationDTO;

    @BeforeEach
    void setUp() {
        accomodations();
    }

    @Test
    void save() {
        accommodationDTO.setId(1L);
        Accommodation accommodation1 = AccommodationUtil.convertToEntity(accommodationDTO);
        when(repository.save(accommodation1)).thenReturn(accommodation1);
        AccommodationDTO response = service.save(accommodationDTO);
        assertEquals(accommodationDTO, response);
    }

    @Test
    void findAll() {
        when(repository.findAll()).thenReturn(List.of(accommodation));

        List<AccommodationDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        accommodation.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(accommodation));
        Optional<Accommodation> response = service.findById(1L);
        assertEquals(accommodation,  response.get());
    }

    @Test
    void deleteById() {
       service.deleteById(1L);
       verify(repository).deleteById(1L);
    }


    private void accomodations() {
        accommodation = new Accommodation(ID, QUARTO_STANDART, QUALI, city, category);
        accommodationDTO = new AccommodationDTO(ID,QUARTO_STANDART, QUALI, city, category);
    }

}