package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.AccommodationDTO;
import com.dh.digitalBooking.service.AccommodationService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * Esta classe representa o controlador responsável por gerenciar as requisições relacionadas a Hospedagem.
 * O controlador fornece rotas para listar todas as hospedagens, encontrar uma hospedagem por ID, salvar uma
 * nova hospedagem, atualizar uma hospedagem existente e excluir uma hospedagem existente.
 * As rotas fornecidas neste controlador são acessíveis através da API REST usando o protocolo HTTP.
 */

@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/api/hospedagem")
public class AccommodationController {

    @Autowired
    private AccommodationService accommodationService;

    /**
     Rota para salvar uma nova hospedagem.
     @param accommodationDTO um objeto AccomodationDTO representando a hospedagem a ser salva.
     @return um objeto AccommodationDTO representando a hospedagem salva.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AccommodationDTO save(@Valid @RequestBody AccommodationDTO accommodationDTO){
        log.info("Creating Accommodation: %s".formatted(accommodationDTO.getName()));
        return  accommodationService.save(accommodationDTO);
    }

    /**
     Rota para listar todas as hospedagem.
     @return uma lista de objetos AccommodationDTO representando todas as hospedagem.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<AccommodationDTO> listAccommodations(){
        log.info("Find All Accommodations");
        return accommodationService.findAll();
    }

    /**
     Rota para encontrar uma hospedagens por ID.
     @param id um Long representando o ID da hospedagem a ser encontrada.
     @return um objeto AccommodationDTO representando a hospedagem encontrada.
     @throws ResponseStatusException se a hospedagem não for encontrada.
     */
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAccommodation(@PathVariable("id") Long id){
        log.info("Delete Accommodation by ID: %d".formatted(id));
        accommodationService.findById(id)
                .map(accommodationFoundOnBase -> {
                    accommodationService.deleteById(accommodationFoundOnBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Accommodation not found"));
    }

    /**
     Rota para atualizar uma hospedagem existente.
     @param id um Long representando o ID da hospedagem a ser atualizada.
     @param accommodationDTO um objeto AccommodationDTO representando a hospedagem atualizada.
     @throws ResponseStatusException se a hospedagem não for encontrada.
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateAccommodation(@PathVariable("id") Long id,
                                    @Valid @RequestBody AccommodationDTO accommodationDTO){
        log.info("Update Accommodation by ID: %d".formatted(id));
        accommodationService.findById(id)
                .map(accommodationFoundOnBase -> {
                    accommodationService.save(accommodationDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Accommodation not found"));
    }
}
