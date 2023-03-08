package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.CategoryDTO;
import com.dh.digitalBooking.service.CategoryService;
import com.dh.digitalBooking.util.CategoryUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * Esta classe representa o controlador responsável por gerenciar as requisições relacionadas a Categoria.
 * O controlador fornece rotas para listar todas as categorias, encontrar uma categoria por ID, salvar uma
 * nova categoria, atualizar uma categoria existente e excluir uma categoria existente.
 * As rotas fornecidas neste controlador são acessíveis através da API REST usando o protocolo HTTP.
 */
@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/api/categoria")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    /**
     Rota para salvar uma nova categoria.
     @param categoryDTO um objeto CategoryDTO representando a categoria a ser salva.
     @return um objeto CategoryDTO representando a categoria salva.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryDTO save(@Valid @RequestBody CategoryDTO categoryDTO) {
        log.info("Creating Category: %s".formatted(categoryDTO.getDescription()));
        return categoryService.save(categoryDTO);
    }

    /**
     Rota para listar todas as categorias.
     @return uma lista de objetos CategoryDTO representando todas as categorias.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryDTO> listCategories(){
        log.info("Find All Categories");
        return categoryService.findAll();
    }

    /**
     Rota para encontrar uma categoria por ID.
     @param id um Long representando o ID da categoria a ser encontrada.
     @return um objeto CategoryDTO representando a categoria encontrada.
     @throws ResponseStatusException se a categoria não for encontrada.
     */
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoryDTO findCategoryById(@PathVariable("id") Long id) {
        log.info("Find Category by ID: %d".formatted(id));
        return categoryService.findById(id)
                .map(CategoryUtil::convertToDTO)
                .orElseThrow(() ->  new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
    }

    /**
     Rota para excluir uma categoria existente.
     @param id um Long representando o ID da categoria a ser excluída.
     @throws ResponseStatusException se a categoria não for encontrada.
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCategory(@PathVariable("id") Long id) {
        log.info("Delete Category by ID: %d".formatted(id));
        categoryService.findById(id)
                .map(categoryFoundOnBase -> {
                    categoryService.deleteById(categoryFoundOnBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
    }

    /**
     Rota para atualizar uma categoria existente.
     @param id um Long representando o ID da categoria a ser atualizada.
     @param categoryDTO um objeto CategoryDTO representando a categoria atualizada.
     @throws ResponseStatusException se a categoria não for encontrada.
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCategory(@PathVariable("id") Long id,
                               @Valid @RequestBody CategoryDTO categoryDTO) {
        log.info("Update Category by ID: %d".formatted(id));
        categoryService.findById(id)
                .map(categoryFoundOnBase -> {
                    categoryService.save(categoryDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
    }
}
