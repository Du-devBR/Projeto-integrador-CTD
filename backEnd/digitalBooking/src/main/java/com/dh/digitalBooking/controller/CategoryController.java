package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.CategoryDTO;
import com.dh.digitalBooking.service.CategoryService;
import com.dh.digitalBooking.util.CategoryUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * This class represents the controller responsible for managing requests related to Category.
 * The controller provides routes to list all categories, find a category by ID, save a new category,
 * update an existing category, and delete an existing category.
 * The routes provided in this controller are accessible through the REST API using the HTTP protocol.
 */
@Slf4j
@RestController
@RequestMapping("/api/categoria")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    /**
     Route to save a new category.
     @param categoryDTO a CategoryDTO object representing the category to be saved.
     @return a CategoryDTO object representing the saved category.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryDTO save(@Valid @RequestBody CategoryDTO categoryDTO) {
        log.info("Creating Category: %s".formatted(categoryDTO.getName()));
        return categoryService.save(categoryDTO);
    }

    /**
     Route to list all categories.
     @return a list of CategoryDTO objects representing all categories.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryDTO> listCategories(){
        log.info("Find All Categories");
        return categoryService.findAll();
    }

    /**
     Route to find a category by ID.
     @param id a Long representing the ID of the category to be found.
     @return a CategoryDTO object representing the found category.
     @throws ResponseStatusException if the category is not found.
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
     Route to delete an existing category.
     @param id a Long representing the ID of the category to be deleted.
     @throws ResponseStatusException if the category is not found.
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
     Route to update an existing category.
     @param id a Long representing the ID of the category to be updated.
     @param categoryDTO a CategoryDTO object representing the updated category.
     @throws ResponseStatusException if the category is not found.
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
