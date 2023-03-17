package com.dh.digitalBooking.dto;

import com.dh.digitalBooking.entity.Product;
import com.dh.digitalBooking.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ReservationDTO {

    private Long id;

    private LocalDateTime dateHourReservation;

    private LocalTime hourReservation;

    private LocalDate dateReservation;

    private LocalDateTime dateHourFinalReservation;

    private LocalTime hourFinalReservation;

    private LocalDate dateFinalReservation;

    private Product product;

    private User user;

}
