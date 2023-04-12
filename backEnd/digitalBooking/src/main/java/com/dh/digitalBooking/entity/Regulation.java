package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.ArrayList;
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

    @Column(name = "saude")
    private List<String> regrasSaude = new ArrayList<>();

    @Column(name = "casa")
    private List<String> regrasCasa = new ArrayList<>();

    @Column(name = "cancelamento")
    private List<String> regrasCancelamento = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "hospedagem-regulamentacao",
                    joinColumns = @JoinColumn(name = "fk_regulamentacao",
                                    referencedColumnName = "id_regulamentacao"),
                    inverseJoinColumns = @JoinColumn(name = "fk_hospedagem",
                                    referencedColumnName = "id_hospedagem"))
    private List<Accommodation> accommodation;
}
