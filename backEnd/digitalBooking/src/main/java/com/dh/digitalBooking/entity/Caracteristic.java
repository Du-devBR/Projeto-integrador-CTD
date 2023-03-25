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
@Table(name = "caracteristica")
public class Caracteristic implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_caracteristica")
    private Long id;

    @Column(name = "descricao")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_imagem", referencedColumnName = "id_imagem")
    private Image iconUrl;
}
