package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "reserva")
public class Reservation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reserva")
    private Long id;

    @Column(name = "data_hora_da_reserva")
    private Timestamp checkIn;

    @Column(name = "hora_da_reserva")
    private LocalTime hourReservation;

    @Column(name = "data_da_reserva")
    private LocalDate dateReservation;

    @Column(name = "data_hora_final_da_reserva")
    private Timestamp checkOut;

    @Column(name = "hora_final_da_reserva")
    private LocalTime hourFinalReservation;

    @Column(name = "data_final_da_reserva")
    private LocalDate dateFinalReservation;

    @Column(name = "preco_final")
    private Double finalPrice;

    @ManyToOne
    @JoinColumn(name = "fk_produto", referencedColumnName = "id_produto")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "fk_usuario", referencedColumnName = "id_usuario")
    private User user;

    public void setDateHourReservation(Timestamp dateHourReservation) {
        this.checkIn = Timestamp.valueOf(Instant.ofEpochMilli(dateHourReservation.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime());

        this.dateReservation = LocalDate.from(this.checkIn.toLocalDateTime());
        this.hourReservation = LocalTime.from(this.checkIn.toLocalDateTime());

    }

    public void setDateHourFinalReservation(Timestamp dateHourFinalReservation) {
        this.checkOut = Timestamp.valueOf(Instant.ofEpochMilli(dateHourFinalReservation.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime());

        this.dateFinalReservation = LocalDate.from(this.checkOut.toLocalDateTime());
        this.hourFinalReservation = LocalTime.from(this.checkOut.toLocalDateTime());
    }
}
