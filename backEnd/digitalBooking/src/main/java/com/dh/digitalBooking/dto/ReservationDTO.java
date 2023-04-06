package com.dh.digitalBooking.dto;

import com.dh.digitalBooking.entity.Product;
import com.dh.digitalBooking.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ReservationDTO {
    private Long id;
    private Timestamp checkIn;
    private LocalTime hourReservation;
    private LocalDate dateReservation;
    private Timestamp checkOut;
    private LocalTime hourFinalReservation;
    private LocalDate dateFinalReservation;
    private Double finalPrice;
    private Product product;
    private User user;

}
