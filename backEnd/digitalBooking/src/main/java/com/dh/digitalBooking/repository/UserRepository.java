package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**

 The UserRepository interface extends JpaRepository to provide CRUD functionality for User entities.
 It is used to interact with the User entity in the database.
 @see org.springframework.data.jpa.repository.JpaRepository
 @see com.dh.digitalBooking.entity.User
 @author Carlos Alberto Filho
 @version 1.0
 @since 09/03/2023
 */

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLogin(String login);
}
