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

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public CategoryDTO save(CategoryDTO categoryDTO){
        Category category = CategoryUtil.convertToEntity(categoryDTO);
        return CategoryUtil.convertToDTO(categoryRepository.save(category));
    }

    public List<CategoryDTO> findAll(){
        return categoryRepository.findAll()
                .stream()
                .map(CategoryUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<Category> findById(Long id){
        return categoryRepository.findById(id);
    }

    public void deleteById(Long id){
        categoryRepository.deleteById(id);
    }


}
