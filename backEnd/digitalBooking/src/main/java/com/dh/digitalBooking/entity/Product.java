package com.dh.digitalBooking.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "produto")
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_produto")
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "descricao")
    private String description;


    @ManyToMany
    @JoinTable(name = "produto-imagem",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "fk_imagem",
                            referencedColumnName = "id_imagem"))
    private List<Image> image;

    @ManyToMany
    @JoinTable(name = "produto-caracteristica",
                    joinColumns = @JoinColumn(name = "id"),
                    inverseJoinColumns = @JoinColumn(name = "fk_caracteristica",
                                    referencedColumnName = "id_caracteristica"))
    private List<Caracteristic> caracteristic;

    @ManyToOne
    @JoinColumn(name="fk_hospedagem", referencedColumnName = "id_hospedagem")
    private Accommodation accommodation;

}
