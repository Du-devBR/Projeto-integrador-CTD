package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Query("SELECT r FROM Reservation r JOIN r.user u WHERE u.id = :idUser")
    List<Reservation>findReservationByIdUser(@Param("idUser") Long idUser);
}
