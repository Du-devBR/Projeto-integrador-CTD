package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 The User class represents a user in the application. It is used to store user data in the database.
 The class is annotated with @Data, @AllArgsConstructor, @NoArgsConstructor, @Builder, @Entity, and @Table annotations.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "USUARIO")
public class User {

    /**
     The id of the user.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UsuarioID")
    private Long id;

    /**
     The name of the user.
     */
    @Column(name = "Nome", length = 250)
    private String name;

    /**
     The last name of the user.
     */
    @Column(name = "Sobrenome", length = 250)
    private String lastName;

    /**
     The email of the user.
     */
    @Column(name = "Email", length = 250)
    private String email;

    /**
     * The Password on Hash
     */
    @Column(name = "senha_hash", nullable = false)
    private String passwordHash;


    /**
     The image URL of the user.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "url_img", referencedColumnName = "ImagemID")
    private Image imageURL;

    /**
     The role of the user.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RoleID", referencedColumnName = "FuncaoID")
    private Role role;
}
