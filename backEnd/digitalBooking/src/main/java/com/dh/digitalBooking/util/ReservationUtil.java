package com.dh.digitalBooking.util;

import com.dh.digitalBooking.dto.ReservationDTO;
import com.dh.digitalBooking.entity.Reservation;
import org.modelmapper.ModelMapper;

public class ReservationUtil {

    private static final ModelMapper MODEL_MAPPER = new ModelMapper();

    public static ReservationDTO convertToDTO(Reservation reservation){
        return MODEL_MAPPER.map(reservation, ReservationDTO.class);
    }

    public static Reservation convertToEntity(ReservationDTO reservationDTO){
        return MODEL_MAPPER.map(reservationDTO, Reservation.class);
    }
}
