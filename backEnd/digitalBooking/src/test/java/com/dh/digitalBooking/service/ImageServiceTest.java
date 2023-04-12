package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.ImageDTO;
import com.dh.digitalBooking.entity.Image;
import com.dh.digitalBooking.repository.ImageRepository;
import com.dh.digitalBooking.util.ImageUtil;
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
class ImageServiceTest {

    @InjectMocks
    private ImageService service;

    @Mock
    private ImageRepository repository;

    @Test
    void save() {
        ImageDTO imageDTO = new ImageDTO();
        imageDTO.setId(1L);
        Image image = ImageUtil.convetToEntity(imageDTO);
        when(repository.save(image)).thenReturn(image);
        ImageDTO response = service.save(imageDTO);
        assertEquals(imageDTO, response);
    }

    @Test
    void findAll() {
        Image image = new Image();
        when(repository.findAll()).thenReturn(List.of(image));

        List<ImageDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        Image image = new Image();
        image.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(image));
        Optional<Image> response = service.findById(1L);
        assertEquals(image,  response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }
}