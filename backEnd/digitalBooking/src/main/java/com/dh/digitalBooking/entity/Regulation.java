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
@Table(name = "REGULAMENTACAO")
public class Regulation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_regulamentacao")
    private Long id;

    @Column(name = "descricao")
    private String description;

    @ManyToMany
    @JoinTable(name = "hospedagem-regulamentacao",
                    joinColumns = @JoinColumn(name = "fk_regulamentacao",
                                    referencedColumnName = "id_regulamentacao"),
                    inverseJoinColumns = @JoinColumn(name = "fk_hospedagem",
                                    referencedColumnName = "id_hospedagem"))
    private List<Accommodation> accommodation;
}
