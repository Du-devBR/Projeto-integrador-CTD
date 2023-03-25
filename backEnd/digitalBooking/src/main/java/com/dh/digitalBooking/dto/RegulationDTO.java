package com.dh.digitalBooking.dto;

import com.dh.digitalBooking.entity.Accommodation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegulationDTO {
    private Long id;

    private String description;

    private List<Accommodation> accommodation;
}
