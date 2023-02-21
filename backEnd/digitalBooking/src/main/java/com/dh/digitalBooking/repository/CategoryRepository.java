package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
