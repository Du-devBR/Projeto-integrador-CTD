package com.dh.digitalBooking.controller;


import com.dh.digitalBooking.dto.CityDTO;
import com.dh.digitalBooking.service.CityService;
import com.dh.digitalBooking.util.CityUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * Esta classe representa o controlador responsável por gerenciar as requisições relacionadas a Cidade.
 * O controlador fornece rotas para listar todas as cidades, encontrar uma cidade por ID, salvar uma
 * nova cidade, atualizar uma cidade existente e excluir uma cidade existente.
 * As rotas fornecidas neste controlador são acessíveis através da API REST usando o protocolo HTTP.
 */

@Slf4j
@RestController
@RequestMapping("/api/cidade")
public class CityController {

    private final CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    /**
     Rota para salvar uma nova cidade.
     @param cityDTO um objeto CityDTO representando a cidade a ser salva.
     @return um objeto CityDTO representando a cidade salva.
     */

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CityDTO save(@Valid @RequestBody CityDTO cityDTO){
        log.info("Creating City: %s".formatted(cityDTO.getName()));
        return cityService.save(cityDTO);
    }

    /**
     Rota para listar todas as cidades.
     @return uma lista de objetos CityDTO representando todas as cidades.
     */

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CityDTO> ListCities(){
        log.info("Find All Cities");
        return cityService.findAll();
    }

    /**
     Rota para encontrar uma cidade por ID.
     @param id um Long representando o ID da cidade a ser encontrada.
     @return um objeto CityDTO representando a cidade encontrada.
     @throws ResponseStatusException se a cidade não for encontrada.
     */
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CityDTO findCityById(@PathVariable("id") Long id){
        log.info("Find City by ID: %d".formatted(id));
        return  cityService.findById(id)
                .map(CityUtil::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "City not found"));

    }

    /**
     Rota para excluir uma cidade existente.
     @param id um Long representando o ID da cidade a ser excluída.
     @throws ResponseStatusException se a cidade não for encontrada.
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public  void deleteCity(@PathVariable("id") Long id){
        log.info("Delete City by ID: %d".formatted(id));
        cityService.findById(id)
                .map(cityFoundOnBase -> {
                    cityService.deleteById(cityFoundOnBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    /**
     Rota para atualizar uma cidade existente.
     @param id um Long representando o ID da cidade a ser atualizada.
     @param cityDTO um objeto CityDTO representando a cidade atualizada.
     @throws ResponseStatusException se a cidade não for encontrada.
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCity(@PathVariable("id") Long id,
                           @Valid @RequestBody CityDTO cityDTO){
        log.info("Update City by ID: %d".formatted(id));
        cityService.findById(id)
                .map(cityFoundOnBase -> {
                    cityService.save(cityDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "City not found"));
    }


}
