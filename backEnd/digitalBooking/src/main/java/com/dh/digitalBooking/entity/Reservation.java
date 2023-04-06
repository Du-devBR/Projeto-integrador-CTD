package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "reserva")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reserva")
    private Long id;

    @Column(name = "data_hora_da_reserva")
    private Timestamp dateHourReservation;

//    @Column(name = "hora_da_reserva")
//    private LocalTime hourReservation;
//
//    @Column(name = "data_da_reserva")
//    private LocalDate dateReservation;

    @Column(name = "data_hora_final_da_reserva")
    private Timestamp dateHourFinalReservation;

//    @Column(name = "hora_final_da_reserva")
//    private LocalTime hourFinalReservation;
//
//    @Column(name = "data_final_da_reserva")
//    private LocalDate dateFinalReservation;


    @ManyToOne
    @JoinColumn(name = "fk_produto", referencedColumnName = "id_produto")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "fk_usuario", referencedColumnName = "id_usuario")
    private User user;
//
//    public void setDateHourReservation(Timestamp dateHourReservation) {
//        this.dateHourReservation = Instant.ofEpochMilli(dateHourReservation.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime();
//
//        this.dateReservation = this.dateHourReservation.toLocalDate();
//        this.hourReservation = this.dateHourReservation.toLocalTime();
//
//    }
//
//    public void setDateHourFinalReservation(Timestamp dateHourFinalReservation) {
//        this.dateHourFinalReservation = Instant.ofEpochMilli(dateHourFinalReservation.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime();
//
//        this.dateFinalReservation = this.dateHourFinalReservation.toLocalDate();
//        this.hourFinalReservation = this.dateHourFinalReservation.toLocalTime();
//    }
}
