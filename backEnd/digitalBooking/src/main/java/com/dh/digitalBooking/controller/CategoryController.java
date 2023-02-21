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

@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/api/Categoria")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryDTO save(@Valid @RequestBody CategoryDTO categoryDTO) {
        log.info("Creating Category: %s".formatted(categoryDTO.getDescription()));
        return categoryService.save(categoryDTO);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryDTO> listCategories(){
        log.info("Find All Categories");
        return categoryService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoryDTO findCategoryById(@PathVariable("id") Long id) {
        log.info("Find Category by ID: %d".formatted(id));
        return categoryService.findById(id)
                .map(CategoryUtil::convertToDTO)
                .orElseThrow(() ->  new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
    }

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

    @DeleteMapping("/{id}")
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
