package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.ReservationDTO;
import com.dh.digitalBooking.entity.Reservation;
import com.dh.digitalBooking.service.ReservationService;
import com.dh.digitalBooking.util.ReservationUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Esta classe representa o controlador responsável por gerenciar as requisições relacionadas a Reserva.
 * O controlador fornece rotas para listar todos as reservas, encontrar uma reserva por ID, salvar uma
 * nova reserva, atualizar uma reserva existente e excluir uma reserva existente.
 * As rotas fornecidas neste controlador são acessíveis através da API REST usando o protocolo HTTP.
 */
@Slf4j
@RestController
@RequestMapping("/api/reserva")

public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    /**
     Rota para salvar uma nova reserva.
     @param reservationDTO um objeto ReservationDTO representando a reserva a ser salvo.
     @return um objeto ReservationDTO representando a reserva salva.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ReservationDTO save(@Valid @RequestBody ReservationDTO reservationDTO){
        log.info("Creating Reservation: %s".formatted(reservationDTO.getId()));
        return reservationService.save(reservationDTO);
    }

    /**
     Rota para listar todas as reservas.
     @return uma lista de objetos reservationDTO representando todas as reservas.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ReservationDTO> ListReservation(){
        log.info("Find All Reservations");
        return reservationService.findAll();
    }

    /**
     Rota para encontrar uma reserva por ID.
     @param id um Long representando o ID da reserva a ser encontrada.
     @return um objeto reservationDTO representando a reserva encontrada.
     @throws ResponseStatusException se a reserva não for encontrada.
     */
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ReservationDTO findReservationById(@PathVariable("id") Long id){
        log.info("Find Reservation by ID: %d".formatted(id));
        return reservationService.findById(id)
                .map(ReservationUtil::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation not Found"));
    }

    /**
     Rota para excluir uma reserva existente.
     @param id um Long representando o ID da reserva a ser excluída.
     @throws ResponseStatusException se a reserva não for encontrada.
     */

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteReservation(@PathVariable("id") Long id){
        log.info("Delete Reservation dy ID: %d".formatted(id));
        reservationService.findById(id)
                .map(reservationFoundOnBase -> {
                    reservationService.deleteById(reservationFoundOnBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation not found"));
    }

    /**
     Rota para atualizar uma reserva existente.
     @param id um Long representando o ID da reserva a ser atualizada.
     @param reservationDTO um objeto resservationDTO representando a reserva atualizada.
     @throws ResponseStatusException se a reserva não for encontrada.
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateReservation(@PathVariable("id") Long id,
                                  @Valid @RequestBody ReservationDTO reservationDTO){
        log.info("Update Reservation by ID: %d".formatted(id));
        reservationService.findById(id)
                .map(reservationFoundOnBase -> {
                    reservationService.save(reservationDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation not found"));
    }

    /**
     Rota para encontrar uma reserva pelo Id do Usuario.
     @param idUser um Long representando o id do usuario para encontrar uma lista de reserva.
     @return uma lista reservationDTO representando a lista de reservas encontrada.
     @throws ResponseStatusException se a reserva não for encontrada.
     */
    @GetMapping("/buscaPorIdDoUsuario")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public List<ReservationDTO> getReservationByIdUser(@RequestParam("idUser") Long idUser){
        if(idUser == null){
            throw new IllegalArgumentException("User Id cannot be null");
        }
        log.info("Find Reservation by User: %d".formatted(idUser));
        List<Reservation> reservationList = reservationService.getReservationByIdUser(idUser);
        if (reservationList.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Reservation not found" + idUser);
        }
        return reservationList.stream()
                .map(ReservationUtil::convertToDTO)
                .collect(Collectors.toList());
    }

}
