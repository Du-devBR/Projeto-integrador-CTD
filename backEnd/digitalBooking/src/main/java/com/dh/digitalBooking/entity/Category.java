package com.dh.digitalBooking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 A class representing a Category entity.
 Contains information about the category, including its ID, description, and image URL.
 This class is mapped to the "CATEGORIA" table in the database.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "CATEGORIA")
public class Category implements Serializable {
    /**
     The ID of the category.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categoriaid")
    private Long id;

    /**
     A name of the category.
     */
    @Column(name = "nome", length = 250)
    private String name;

    /**
     The URL of the category's image.
     */
    @ManyToOne
    @JoinColumn(name = "url_img", referencedColumnName = "ImagemID")
    private Image imageURL;

}
