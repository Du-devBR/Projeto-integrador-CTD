package com.dh.digitalBooking.dto;

import com.dh.digitalBooking.entity.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CaracteristicDTO {
    private Long id;

    private String description;

    private Image iconUrl;

}
