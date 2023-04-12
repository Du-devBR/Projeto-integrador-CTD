package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.CategoryDTO;
import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.repository.CategoryRepository;
import com.dh.digitalBooking.util.CategoryUtil;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CategoryServiceTest {

    @InjectMocks
    private CategoryService service;

    @Mock
    private CategoryUtil categoryUtil;

    @Mock
    private CategoryRepository repository;

    @Test
    void save() {
        //ImageRepository imageRepositoryMock = Mockito.mock(ImageRepository.class);
        //Mockito.when(imageRepositoryMock.save(Mockito.any(Image.class))).thenReturn(new Image());

        //CategoryDTO categoryDTO = new CategoryDTO();
        //categoryDTO.setName("Test");

        //categoryUtil = Mockito.mock(CategoryUtil.class);
        //Mockito.when(categoryUtil.convertToEntity(categoryDTO)).thenReturn(new Category());

        //repository = Mockito.mock(CategoryRepository.class);
        //service = new CategoryService(categoryUtil, repository);
        //service.save(categoryDTO);

        //Mockito.verify(imageRepositoryMock, Mockito.times(1)).save(Mockito.any(Image.class));
        //Mockito.verify(repository, Mockito.times(1)).save(Mockito.any(Category.class));
    }

    @Test
    void findAll() {
        Category category = new Category();
        when(repository.findAll()).thenReturn(List.of(category));

        List<CategoryDTO> response = service.findAll();
        assertEquals(1, response.size());
    }

    @Test
    void findById() {
        Category category = new Category();
        category.setId(1L);
        when(repository.findById(1L)).thenReturn(Optional.of(category));
        Optional<Category> response = service.findById(1L);
        assertEquals(category,  response.get());
    }

    @Test
    void deleteById() {
        service.deleteById(1L);
        verify(repository).deleteById(1L);
    }
}