package com.dh.digitalBooking.dto;

import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.entity.City;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AccommodationDTO {
    private Long id;

    private String name;

    private String qualification;

    private List<City> city;

    private List<Category> category;
}
