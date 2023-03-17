package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.ReservationDTO;
import com.dh.digitalBooking.entity.Reservation;
import com.dh.digitalBooking.repository.ReservationRepository;
import com.dh.digitalBooking.util.ReservationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public ReservationDTO save(ReservationDTO reservationDTO){
        Reservation reservation = ReservationUtil.convertToEntity(reservationDTO);
        return ReservationUtil.convertToDTO(reservationRepository.save(reservation));
    }

    public List<ReservationDTO> findAll(){
        return reservationRepository.findAll()
                .stream()
                .map(ReservationUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<Reservation> findById(Long id){
        return reservationRepository.findById(id);
    }

    public void deleteById(Long id){
        reservationRepository.deleteById(id);
    }
}
