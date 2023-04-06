package com.dh.digitalBooking.dto;

import com.dh.digitalBooking.entity.Product;
import com.dh.digitalBooking.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ReservationDTO {

    private Long id;

    private Timestamp dateHourReservation;

//    private LocalTime hourReservation;
//
//    private LocalDate dateReservation;

    private Timestamp dateHourFinalReservation;
//
//    private LocalTime hourFinalReservation;
//
//    private LocalDate dateFinalReservation;

    private Product product;

    private User user;

}
