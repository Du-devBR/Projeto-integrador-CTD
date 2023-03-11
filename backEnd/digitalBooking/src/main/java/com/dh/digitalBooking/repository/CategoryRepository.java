package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 A repository interface for accessing Category entities in the database.
 Extends the JpaRepository interface and provides CRUD operations for Category objects.
 The type parameter specifies the type of the entity (Category) and the primary key (Long).
 @see org.springframework.data.jpa.repository.JpaRepository
 @see com.dh.digitalBooking.entity.Category
 @author Carlos Alberto Filho
 @version 1.0
 @since 09/03/2023
 */
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
