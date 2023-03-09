package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.CategoryDTO;
import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.repository.CategoryRepository;
import com.dh.digitalBooking.util.CategoryUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
/**
 This class represents the service layer of Category which is responsible for
 handling business logic for Category entity.
 */
@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    /**
     Saves the given CategoryDTO entity to the database.
     @param categoryDTO the CategoryDTO entity to be saved.
     @return the CategoryDTO entity after being saved to the database.
     */
    public CategoryDTO save(CategoryDTO categoryDTO){
        Category category = CategoryUtil.convertToEntity(categoryDTO);
        return CategoryUtil.convertToDTO(categoryRepository.save(category));
    }

    /**
     Finds all Category entities in the database.
     @return a List of all CategoryDTO entities.
     */
    public List<CategoryDTO> findAll(){
        return categoryRepository.findAll()
                .stream()
                .map(CategoryUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     Finds the Category entity with the given id in the database.
     @param id the id of the Category entity to be found.
     @return an Optional object that contains the Category entity with the given id,
     or an empty Optional object if no such entity exists.
     */
    public Optional<Category> findById(Long id){
        return categoryRepository.findById(id);
    }

    /**
     Deletes the Category entity with the given id from the database.
     @param id the id of the Category entity to be deleted.
     */
    public void deleteById(Long id){
        categoryRepository.deleteById(id);
    }

}
