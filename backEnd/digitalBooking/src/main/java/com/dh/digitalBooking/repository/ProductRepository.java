package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findByCityName(String name);

    Optional<Product> findByCategoryName(String name);

}