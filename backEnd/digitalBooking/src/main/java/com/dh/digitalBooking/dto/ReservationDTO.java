package com.dh.digitalBooking.dto;

import com.dh.digitalBooking.entity.Product;
import com.dh.digitalBooking.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ReservationDTO {
    private Long id;
    private Timestamp checkIn;
    private Timestamp checkOut;
    private Double finalPrice;
    private ProductDTO product;
    private UserDTO user;

}
