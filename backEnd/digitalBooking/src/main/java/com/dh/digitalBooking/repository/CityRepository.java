package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository  extends JpaRepository<City, Long> {
}
