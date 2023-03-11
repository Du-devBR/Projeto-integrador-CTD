package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

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
public class User implements UserDetails {

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
    private String login;

    /**
     * The Password on Hash
     */
    @Column(name = "senha_hash", nullable = false)
    private String password;


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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.getName()));
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
