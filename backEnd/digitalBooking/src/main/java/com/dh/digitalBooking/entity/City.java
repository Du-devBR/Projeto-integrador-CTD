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
@Table(name = "cidade")
public class City implements Serializable {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id_cidade")
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "estado")
    private String state;

    @Column(name = "pais")
    private String country;
}
