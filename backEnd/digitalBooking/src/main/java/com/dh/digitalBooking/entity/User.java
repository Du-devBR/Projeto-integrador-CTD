package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "USUARIO")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UsuarioID")
    private Long id;

    @Column(name = "Nome")
    private String name;

    @Column(name = "Sobrenome")
    private String lastName;

    @Column(name = "Email")
    private String email;

    @ManyToOne
    @JoinColumn(name = "RoleID", referencedColumnName = "FuncaoID")
    private Role funcao;
}
