package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.ProductDTO;
import com.dh.digitalBooking.entity.Product;
import com.dh.digitalBooking.repository.ProductRepository;
import com.dh.digitalBooking.util.ProductUtil;
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
class ProductServiceTest {

    @InjectMocks
    private ProductService service;

    @Mock
    private ProductRepository repository;

    @Test
    void save() {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(1L);
        Product product = ProductUtil.convertToEntity(productDTO);
        when(repository.save(product)).thenReturn(product);
        ProductDTO response = service.save(productDTO);
        assertEquals(productDTO, response);
    }

    @Test
    void findAll() {
        Product product = new Product();
        when(repository.findAll()).thenReturn(List.of(product));

        List<ProductDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        Product product = new Product();
        product.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(product));
        Optional<Product> response = service.findById(1L);
        assertEquals(product,  response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }
}