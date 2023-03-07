package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}