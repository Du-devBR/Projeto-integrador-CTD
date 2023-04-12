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

    @Column(name = "data_da_reserva")
    private Timestamp checkIn;

    @Column(name = "data_final_da_reserva")
    private Timestamp checkOut;

    @Column(name = "preco_final")
    private Double finalPrice;

    @ManyToOne
    @JoinColumn(name = "fk_produto", referencedColumnName = "id_produto")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "fk_usuario", referencedColumnName = "id_usuario")
    private User user;


}
