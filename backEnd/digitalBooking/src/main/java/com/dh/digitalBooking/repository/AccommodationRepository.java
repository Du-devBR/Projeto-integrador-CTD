package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {
}
