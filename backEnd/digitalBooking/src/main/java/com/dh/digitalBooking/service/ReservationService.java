package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.ReservationDTO;
import com.dh.digitalBooking.email.EnviaEmailService;
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

    private final ReservationRepository reservationRepository;

    @Autowired
    private EnviaEmailService enviaEmailService;

    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public ReservationDTO save(ReservationDTO reservationDTO){
        Reservation reservation = ReservationUtil.convertToEntity(reservationDTO);
//        this.enviaEmailService.enviar(reservation.getUser().getLogin(), "Reserva realizada som sucesso", com.dh.digitalBooking.message.EmailMessages.insertReserva(reservation));
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

    public  List<Reservation> getReservationByIdUser(Long idUser){
        return reservationRepository.findReservationByIdUser(idUser);
    }
}
