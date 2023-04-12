package com.dh.digitalBooking.dto;

import com.dh.digitalBooking.entity.Accommodation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegulationDTO {
    private Long id;

    private List<String> regrasSaude = new ArrayList<>();

    private List<String> regrasCasa = new ArrayList<>();

    private List<String> regrasCancelamento = new ArrayList<>();

    private List<Accommodation> accommodation;
}
