package com.dh.digitalBooking.service;


import com.dh.digitalBooking.dto.ProductDTO;
import com.dh.digitalBooking.entity.Product;
import com.dh.digitalBooking.repository.ProductRepository;
import com.dh.digitalBooking.util.ProductUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductDTO save(ProductDTO productDTO){
        Product product = ProductUtil.convertToEntity(productDTO);
        return ProductUtil.convertToDTO(productRepository.save(product));
    }

    public List<ProductDTO> findAll(){
        return productRepository.findAll()
                .stream()
                .map(ProductUtil::convertToDTO)
                .collect(Collectors.toList());

    }

    public Optional<Product> findById(Long id){
        return productRepository.findById(id);
    }

    public void deleteById(Long id){
        productRepository.deleteById(id);
    }
}
