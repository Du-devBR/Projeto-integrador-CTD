package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "HOSPEDAGEM")
public class Accommodation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hospedagemid")
    private Long id;

    @Column(name="nome")
    private String name;

    @Column(name = "qualificacao")
    private String qualification;

    @ManyToOne
    @JoinColumn(name = "id_city", referencedColumnName = "cidadeid")
    private City city;


    @ManyToOne
    @JoinColumn(name = "id_category", referencedColumnName = "categoriaid")
    private Category category;

}
