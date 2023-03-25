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
@Table(name = "hospedagem")
public class Accommodation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_hospedagem")
    private Long id;

    @Column(name="nome")
    private String name;

    @Column(name = "qualificacao")
    private String qualification;

    @ManyToOne
    @JoinColumn(name = "fk_cidade", referencedColumnName = "id_cidade")
    private City city;


    @ManyToOne
    @JoinColumn(name = "fk_categoria", referencedColumnName = "id_categoria")
    private Category category;

}
