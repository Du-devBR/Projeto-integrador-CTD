package com.dh.digitalBooking.dto;


import com.dh.digitalBooking.entity.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ProductDTO {

    private Long id;

    private String name;

    private Double price;

    private String description;

    private List<Image> image;

    private List<Caracteristic> caracteristic;

    private Accommodation accommodation;

}
