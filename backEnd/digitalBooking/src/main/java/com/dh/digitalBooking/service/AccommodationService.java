package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.AccommodationDTO;
import com.dh.digitalBooking.entity.Accommodation;
import com.dh.digitalBooking.repository.AccommodationRepository;
import com.dh.digitalBooking.util.AccommodationUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;

    public AccommodationService(AccommodationRepository accommodationRepository) {
        this.accommodationRepository = accommodationRepository;
    }

    public AccommodationDTO save(AccommodationDTO accommodationDTO){
        Accommodation accommodation = AccommodationUtil.convertToEntity(accommodationDTO);
        return AccommodationUtil.convertToDTO(accommodationRepository.save(accommodation));
    }

    public List<AccommodationDTO> findAll(){
        return accommodationRepository.findAll()
                .stream()
                .map(AccommodationUtil::convertToDTO)
                .collect(Collectors.toList());

    }

    public Optional<Accommodation> findById(Long id){
        return accommodationRepository.findById(id);
    }

    public void deleteById(Long id){
        accommodationRepository.deleteById(id);
    }
}
