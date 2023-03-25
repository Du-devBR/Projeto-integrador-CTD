package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.CaracteristicDTO;
import com.dh.digitalBooking.service.CaracteristicService;
import com.dh.digitalBooking.util.CaracteristicUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * Esta classe representa o controlador responsável por gerenciar as requisições relacionadas a Caracteristica.
 * O controlador fornece rotas para listar todas as Caracteristicas, encontrar uma Caracteristica por ID, salvar uma
 * nova Caracteristica, atualizar uma Caracteristica existente e excluir uma Caracteristica existente.
 * As rotas fornecidas neste controlador são acessíveis através da API REST usando o protocolo HTTP.
 */

@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/api/caracteristica")
public class CaracteristicController {
    /**
     O serviço de Caracteristica injetado para gerenciar as requisições.
     */

    private final CaracteristicService caracteristicService;

    public CaracteristicController(CaracteristicService caracteristicService) {
        this.caracteristicService = caracteristicService;
    }

    /**
     Rota para salvar uma nova Caracteristica.
     @param caracteristicDTO um objeto CaracteristicDTO representando a Caracteristica a ser salva.
     @return um objeto CaracteristicDTO representando a Caracteristica salva.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CaracteristicDTO save(@Valid @RequestBody CaracteristicDTO caracteristicDTO){
        log.info("Creating Caracteristic: %s".formatted(caracteristicDTO.getDescription()));
        return caracteristicService.save(caracteristicDTO);
    }

    /**
     Rota para listar todas as Caracteristicas.
     @return uma lista de objetos CaracteristicDTO representando todas as Caracteristicas.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CaracteristicDTO> listCaracteristics(){
        log.info("Find All Caracteristics");
        return caracteristicService.findAll();
    }
    /**
     Rota para encontrar uma Caracteristica por ID.
     @param id um Long representando o ID da Caracteristica a ser encontrada.
     @return um objeto CaracteristicDTO representando a Caracteristica encontrada.
     @throws ResponseStatusException se a Caracteristica não for encontrada.
     */
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public CaracteristicDTO findCaracteristicById(@PathVariable("id") Long id){
        log.info("Find Caracteristic by ID: %d".formatted(id));
        return caracteristicService.findById(id)
                .map(CaracteristicUtil::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Caracteristic not found"));
    }

    /**
     Rota para excluir uma Caracteristica existente.
     @param id um Long representando o ID da Caracteristica a ser excluída.
     @throws ResponseStatusException se a Caracteristica não for encontrada.
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCaractristic(@PathVariable("id") Long id){
        log.info("Delete Caracteristic by ID: %d".formatted(id));
        caracteristicService.findById(id)
                .map(caracteristicFoundOnBase -> {
                    caracteristicService.deleteById(caracteristicFoundOnBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Caracteristic not found"));
    }

    /**
     Rota para atualizar uma Caracteristica existente.
     @param id um Long representando o ID da Caracteristica a ser atualizada.
     @param caracteristicDTO um objeto CaracteristicDTO representando a Caracteristica atualizada.
     @throws ResponseStatusException se a Caracteristica não for encontrada.
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCaracteristic(@PathVariable("id") Long id,
                                    @Valid @RequestBody CaracteristicDTO caracteristicDTO){
        log.info("Update Caracteristic by ID: %d".formatted(id));
        caracteristicService.findById(id)
                .map(caracteristicFoundOnBase -> {
                    caracteristicService.save(caracteristicDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Caracteristc not found"));
    }

}
