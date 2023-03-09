package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 A repository interface for accessing Role entities in the database.
 Extends the JpaRepository interface and provides CRUD operations for Role objects.
 The type parameter specifies the type of the entity (Role) and the primary key (Long).
 @see org.springframework.data.jpa.repository.JpaRepository
 @see com.dh.digitalBooking.entity.Role
 @author Carlos Alberto Filho
 @version 1.0
 @since 09/03/2023
 */
public interface RoleRepository extends JpaRepository<Role, Long> {
}
