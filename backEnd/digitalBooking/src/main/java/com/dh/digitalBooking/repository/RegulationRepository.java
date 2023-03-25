package com.dh.digitalBooking.repository;

import com.dh.digitalBooking.entity.Regulation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegulationRepository  extends JpaRepository<Regulation, Long> {
}
