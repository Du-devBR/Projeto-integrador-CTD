package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.RegulationDTO;
import com.dh.digitalBooking.entity.Regulation;
import com.dh.digitalBooking.repository.RegulationRepository;
import com.dh.digitalBooking.util.RegulationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RegulationService {

    @Autowired
    private RegulationRepository regulationRepository;

    public RegulationDTO save(RegulationDTO regulationDTO){
        Regulation regulation = RegulationUtil.convertToEntity(regulationDTO);
        return RegulationUtil.convertToDTO(regulationRepository.save(regulation));
    }

    public List<RegulationDTO> findAll(){
        return regulationRepository.findAll()
                .stream()
                .map(RegulationUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<Regulation> findById(Long id){
        return regulationRepository.findById(id);
    }

    public void deleteById(Long id){
        regulationRepository.deleteById(id);
    }
}
