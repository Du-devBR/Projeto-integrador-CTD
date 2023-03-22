package com.dh.digitalBooking.model;


import jakarta.persistence.*;
import lombok.*;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categoria")

public class CategoriaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;


    @Column(name = "qualificação")
    private String qualificacao;

    private String descricao;

    private String urlDaImagem;


}
