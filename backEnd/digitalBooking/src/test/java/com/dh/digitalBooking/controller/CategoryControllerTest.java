package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.dto.CategoryDTO;
import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.service.CategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest(CategoryController.class)
public class CategoryControllerTest {
    @MockBean
    private CategoryService categoryService;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;


    @Test
    @WithMockUser(username="user")
    public void testListCategories() throws Exception {
        List<CategoryDTO> categories = new ArrayList<>();
        CategoryDTO category1 = new CategoryDTO(1L, "1", "Category 1", "http://link.test.com/1");
        CategoryDTO category2 = new CategoryDTO(2L, "2", "Category 2", "http://link.test.com/2");
        categories.add(category1);
        categories.add(category2);


        Mockito.when(categoryService.findAll()).thenReturn(categories);

        mockMvc.perform(get("/api/categoria"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].id", equalTo(1)))
                .andExpect(jsonPath("$[0].description", equalTo("Category 1")))
                .andExpect(jsonPath("$[1].id", equalTo(2)))
                .andExpect(jsonPath("$[1].description", equalTo("Category 2")));

    }

    @Test
    public void testListCategoriesWithUnauthenticatedUser() throws Exception {
        mockMvc.perform(get("/api/categoria"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(username="user")
    public void testFindCategoryById() throws Exception {
        Category category = new Category(1L, "1", "Category 1", "http://link.test.com/1");

        Mockito.when(categoryService.findById(1L)).thenReturn(Optional.of(category));

        mockMvc.perform(get("/api/categoria/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.description").value("Category 1"));
    }

    @Test
    @WithMockUser(username="user")
    public void testFindCategoryByIdNotFound() throws Exception {
        Mockito.when(categoryService.findById(1L)).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/categoria/1"))
                .andExpect(status().isNotFound());
    }


    @Test
    @WithMockUser(username="user", roles= "ADMIN")
    public void testSaveCategory() throws Exception {
        CategoryDTO category = new CategoryDTO(1L, "1", "Category 1", "http://link.test.com/1");

        Mockito.when(categoryService.save(any(CategoryDTO.class))).thenAnswer(invocation -> {
            CategoryDTO savedCategory = invocation.getArgument(0, CategoryDTO.class);
            savedCategory.setId(1L);
            return savedCategory;
        });

        ResultActions resultActions = mockMvc.perform(post("/api/categoria")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(category)))
                .andExpect(status().isCreated());

        CategoryDTO savedCategory = objectMapper.readValue(resultActions.andReturn().getResponse().getContentAsString(), CategoryDTO.class);

        Mockito.verify(categoryService).save(category);
        assertThat(savedCategory.getId(), notNullValue());
        assertThat(savedCategory.getDescription(), equalTo("Category"));
    }

    @Test
    @WithMockUser(username="user", roles= "ADMIN")
    public void testDeleteCategory() throws Exception {
        Category category = new Category(1L, "1", "Category 1", "http://link.test.com/1");

        Mockito.when(categoryService.findById(1L)).thenReturn(Optional.of(category));

        mockMvc.perform(delete("/api/Categoria/1"))
                .andExpect(status().isNoContent());

        Mockito.verify(categoryService).deleteById(1L);
    }


}
