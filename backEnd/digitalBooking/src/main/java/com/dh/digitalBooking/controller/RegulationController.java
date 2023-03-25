package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.RegulationDTO;
import com.dh.digitalBooking.service.RegulationService;
import com.dh.digitalBooking.util.RegulationUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * Esta classe representa o controlador responsável por gerenciar as requisições relacionadas a regulamentação.
 * O controlador fornece rotas para listar todas as regulamentações, encontrar uma regulamentação por ID, salvar uma
 * nova regulamentação, atualizar uma regulamentação existente e excluir uma regulamentação existente.
 * As rotas fornecidas neste controlador são acessíveis através da API REST usando o protocolo HTTP.
 */
@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/api/regulamentacao")
public class RegulationController {

    @Autowired
    private RegulationService regulationService;

    /**
     Rota para salvar uma nova regulamentação.
     @param regulationDTO um objeto RegulationDTO representando a regulamentação a ser salva.
     @return um objeto RegulationDTO representando a regulamentação salva.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public RegulationDTO save(@Valid @RequestBody RegulationDTO regulationDTO){
        log.info("Creating Regulation: %s".formatted(regulationDTO.getDescription()));
        return regulationService.save(regulationDTO);
    }

    /**
     Rota para listar todas as regulamentações.
     @return uma lista de objetos regulationDTO representando todas as regulamentações.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<RegulationDTO> ListRegulations(){
        log.info("Find All Regulations");
        return regulationService.findAll();
    }

    /**
     Rota para encontrar uma regulamentação por ID.
     @param id um Long representando o ID da regulamentação a ser encontrada.
     @return um objeto regulationDTO representando a regulamentação encontrada.
     @throws ResponseStatusException se a regulamentação não for encontrada.
     */
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RegulationDTO findRegulationById(@PathVariable("id") Long id){
        log.info("Find Regulation by ID: %d".formatted(id));
        return regulationService.findById(id)
                .map(RegulationUtil::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Regulation not found "));
    }

    /**
     Rota para excluir uma regulamentação existente.
     @param id um Long representando o ID da regulamentação a ser excluída.
     @throws ResponseStatusException se a regulamentação não for encontrada.
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRegulation(@PathVariable("id") Long id){
        log.info("Delete Regulation by ID: %d".formatted(id));
        regulationService.findById(id)
                .map(regulationFoundBase -> {
                    regulationService.deleteById(regulationFoundBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Regulation not found"));
    }

    /**
     Rota para atualizar uma regulamentação existente.
     @param id um Long representando o ID da regulamentação a ser atualizada.
     @param regulationDTO um objeto regulationDTO representando a regulamentação atualizada.
     @throws ResponseStatusException se a regulamentação não for encontrada.
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateRegulation(@PathVariable("id") Long id,
                                 @Valid @RequestBody RegulationDTO regulationDTO){
        log.info("Update Regulation by ID: %d".formatted(id));
        regulationService.findById(id)
                .map(regulationFoundBase -> {
                    regulationService.save(regulationDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Regulation not found"));
    }
}
