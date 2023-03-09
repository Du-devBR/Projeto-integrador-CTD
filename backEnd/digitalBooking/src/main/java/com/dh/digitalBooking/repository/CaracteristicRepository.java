package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Caracteristic;
import com.dh.digitalBooking.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CaracteristicRepository extends JpaRepository<Caracteristic, Long> {
}
