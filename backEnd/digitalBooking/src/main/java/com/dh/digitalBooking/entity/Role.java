package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
/**
 A class representing a Role entity.
 Contains information about the role, including its ID, name, and description.
 This class is mapped to the "FUNCAO" table in the database.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "FUNCAO")
public class Role implements Serializable {

    /**
    The ID of the role.
    */
    @Id
    @GeneratedValue
    @Column(name = "FuncaoID")
    private Long id;

    /**
     The name of the role.
     */
    @Column(name = "Nome", length = 40)
    private String Name;

    /**
     A brief description of the role.
     */
    @Column(name = "Descricao", length = 200)
    private String Description;
}
