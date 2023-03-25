package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.CaracteristicDTO;
import com.dh.digitalBooking.entity.Caracteristic;
import com.dh.digitalBooking.repository.CaracteristicRepository;
import com.dh.digitalBooking.util.CaracteristicUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CaracteristicService {

    private final CaracteristicRepository caracteristicRepository;

    public CaracteristicService(CaracteristicRepository caracteristicRepository) {
        this.caracteristicRepository = caracteristicRepository;
    }

    public CaracteristicDTO save(CaracteristicDTO caracteristicDTO){
        Caracteristic caracteristic = CaracteristicUtil.convertToEntity(caracteristicDTO);
        return CaracteristicUtil.convertToDTO(caracteristicRepository.save(caracteristic));
    }

    public List<CaracteristicDTO> findAll(){
        return caracteristicRepository.findAll()
                .stream()
                .map(CaracteristicUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<Caracteristic> findById(Long id){
        return caracteristicRepository.findById(id);
    }

    public void deleteById(Long id){
        caracteristicRepository.deleteById(id);
    }
}
