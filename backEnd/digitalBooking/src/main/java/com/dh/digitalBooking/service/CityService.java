package com.dh.digitalBooking.service;


import com.dh.digitalBooking.dto.CityDTO;
import com.dh.digitalBooking.entity.City;
import com.dh.digitalBooking.repository.CityRepository;
import com.dh.digitalBooking.util.CityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public CityDTO save(CityDTO cityDTO){
        City city = CityUtil.convertToEntity(cityDTO);
        return CityUtil.convertToDTO(cityRepository.save(city));
    }

    public List<CityDTO> findAll(){
        return cityRepository.findAll()
                .stream()
                .map(CityUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<City> findById(Long id){
        return cityRepository.findById(id);
    }

    public void deleteById(Long id){
        cityRepository.deleteById(id);
    }

}
