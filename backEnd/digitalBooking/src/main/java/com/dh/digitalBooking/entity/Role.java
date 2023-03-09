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
@Table(name = "FUNCAO")
public class Role implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "FuncaoID")
    private Long id;

    @Column(name = "Nome")
    private String Name;

    @Column(name = "Descricao")
    private String Description;
}
