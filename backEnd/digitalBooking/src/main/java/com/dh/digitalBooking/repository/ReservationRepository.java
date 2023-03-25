package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
