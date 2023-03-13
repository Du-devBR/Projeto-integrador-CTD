package com.dh.digitalBooking.dto;


import com.dh.digitalBooking.entity.Caracteristic;
import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.entity.City;
import com.dh.digitalBooking.entity.Image;
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

    private String description;

    private List<City> city;

    private List<Image> image;

    private List<Category> category;

    private List<Caracteristic> caracteristic;

}
