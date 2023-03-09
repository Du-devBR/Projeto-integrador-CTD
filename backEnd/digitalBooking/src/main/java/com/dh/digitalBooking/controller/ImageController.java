package com.dh.digitalBooking.controller;


import com.dh.digitalBooking.dto.ImageDTO;
import com.dh.digitalBooking.service.ImageService;
import com.dh.digitalBooking.util.ImageUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


/**
 * Esta classe representa o controlador responsável por gerenciar as requisições relacionadas a Imagem.
 * O controlador fornece rotas para listar todas as imagens, encontrar uma imagem por ID, salvar uma
 * nova imagem, atualizar uma imagem existente e excluir uma imagem existente.
 * As rotas fornecidas neste controlador são acessíveis através da API REST usando o protocolo HTTP.
 */
@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/api/imagem")
public class ImageController {

    @Autowired
    private ImageService imageService;

    /**
     Rota para salvar uma nova imagem.
     @param imageDTO um objeto ImageDTO representando a imagem a ser salva.
     @return um objeto ImageDTO representando a imagem salva.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ImageDTO save(@Valid @RequestBody ImageDTO imageDTO){
        log.info("Creating Image: %s".formatted(imageDTO.getDescription()));
        return imageService.save(imageDTO);
    }

    /**
     Rota para listar todas as imagens.
     @return uma lista de objetos ImageDTO representando todas as imagens.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ImageDTO> ListImages(){
        log.info("Find All Images");
        return imageService.findAll();
    }

    /**
     Rota para encontrar uma imagem por ID.
     @param id um Long representando o ID da imagem a ser encontrada.
     @return um objeto ImageDTO representando a imagem encontrada.
     @throws ResponseStatusException se a imagem não for encontrada.
     */
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public  ImageDTO findImageById(@PathVariable("id") Long id){
        log.info("Find Image by ID: %d".formatted(id));
        return imageService.findById(id)
                .map(ImageUtil::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    /**
     Rota para excluir uma imagem existente.
     @param id um Long representando o ID da imagem a ser excluída.
     @throws ResponseStatusException se a imagem não for encontrada.
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteImage(@PathVariable("id") Long id){
        log.info("Delete Image by ID: %d".formatted(id));
        imageService.findById(id)
                .map(imageFoundOnBase -> {
                    imageService.deleteById(imageFoundOnBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Image not found"));
    }

    /**
     Rota para atualizar uma imagem existente.
     @param id um Long representando o ID da imagem a ser atualizada.
     @param imageDTO um objeto ImageDTO representando a imagem atualizada.
     @throws ResponseStatusException se a imagem não for encontrada.
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateImage(@PathVariable("id") Long id,
                            @Valid @RequestBody ImageDTO imageDTO){
        log.info("Update Image by ID: %d".formatted(id));
        imageService.findById(id)
                .map(imageFoundOnBase -> {
                    imageService.save(imageDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Image not found"));
    }


}
