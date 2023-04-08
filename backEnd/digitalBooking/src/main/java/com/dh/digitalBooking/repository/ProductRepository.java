package com.dh.digitalBooking.repository;


import com.dh.digitalBooking.entity.Product;
import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p " +
           "JOIN p.accommodation a " +
           "JOIN a.city c " +
           "WHERE c.name = :cityName")
    List<Product>findProductsByCityName(@Param("cityName") String cityName);

    @Query("SELECT p FROM Product p " +
           "JOIN p.accommodation a " +
           "JOIN a.category c " +
           "WHERE c.name = :categoryName")
    List<Product>findProductsByCategoryName(@Param("categoryName") String categoryName);

}

