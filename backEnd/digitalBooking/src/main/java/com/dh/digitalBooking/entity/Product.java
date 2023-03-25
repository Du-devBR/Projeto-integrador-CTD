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
@Table(name = "PRODUTO")
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;


    @ManyToMany
    @JoinTable(name = "produto-imagem",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "id_image"))
    private List<Image> image;

    @ManyToMany
    @JoinTable(name = "produto-caracteristica",
                    joinColumns = @JoinColumn(name = "id"),
                    inverseJoinColumns = @JoinColumn(name = "id_caracteristic"))
    private List<Caracteristic> caracteristic;

    @ManyToOne
    @JoinColumn(name="id_accommodation")
    private Accommodation accommodation;

}
