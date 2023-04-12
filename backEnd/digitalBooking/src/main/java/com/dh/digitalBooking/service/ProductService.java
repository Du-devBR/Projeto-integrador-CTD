package com.dh.digitalBooking.service;


import com.dh.digitalBooking.dto.ProductDTO;
import com.dh.digitalBooking.entity.Product;
import com.dh.digitalBooking.repository.ProductRepository;
import com.dh.digitalBooking.util.ProductUtil;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

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

    public List<Product> getProductsByCityName(String cityName){
        return productRepository.findProductsByCityName(cityName);
    }

    public List<Product> getProductsByCategoryName(String categoryName){
        return productRepository.findProductsByCategoryName(categoryName);
    }

    public List<Product> findProductByCityAndDates(String cityName, Timestamp startDate, Timestamp endDate) {
        return productRepository.findProductByCityAndDates(cityName, startDate, endDate);
    }

}
