package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "RESERVA")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ReservaID")
    private Long id;

    private LocalDateTime dateHourReservation;

    private LocalTime hourReservation;

    private LocalDate dateReservation;

    public void setDateHourReservation(Timestamp dateHourReservation) {
        this.dateHourReservation = Instant.ofEpochMilli(dateHourReservation.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime();

        this.dateReservation = this.dateHourReservation.toLocalDate();
        this.hourReservation = this.dateHourReservation.toLocalTime();

    }

    private LocalDateTime dateHourFinalReservation;

    private LocalTime hourFinalReservation;

    private LocalDate dateFinalReservation;

    public void setDateHourFinalReservation(Timestamp dateHourFinalReservation) {
        this.dateHourFinalReservation = Instant.ofEpochMilli(dateHourFinalReservation.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime();

        this.dateFinalReservation = this.dateHourFinalReservation.toLocalDate();
        this.hourFinalReservation = this.dateHourFinalReservation.toLocalTime();
    }

    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;


}
