package com.dh.digitalBooking.controller;


import com.dh.digitalBooking.dto.ProductDTO;
import com.dh.digitalBooking.service.ProductService;
import com.dh.digitalBooking.util.ProductUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * Esta classe representa o controlador responsável por gerenciar as requisições relacionadas ao Produto.
 * O controlador fornece rotas para listar todos os produtos, encontrar um produto por ID, salvar um
 * novo produto, atualizar um produto existente e excluir um produto existente.
 * As rotas fornecidas neste controlador são acessíveis através da API REST usando o protocolo HTTP.
 */
@Slf4j
@RestController
@RequestMapping("/api/produto")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     Rota para salvar um novo produto.
     @param productDTO um objeto ProductDTO representando o produto a ser salvo.
     @return um objeto ProductDTO representando o produto salvo.
     */

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductDTO save(@Valid @RequestBody ProductDTO productDTO) {
        log.info("Creating Product: %s".formatted(productDTO.getDescription()));
        return  productService.save(productDTO);
    }

    /**
     Rota para listar todos os produtos.
     @return uma lista de objetos productDTO representando todos os produtos.
     */

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> ListProducts(){
        log.info("Find All Products");
        return productService.findAll();
    }

    /**
     Rota para encontrar um produto por ID.
     @param id um Long representando o ID do produto a ser encontrado.
     @return um objeto productDTO representando o produto encontrado.
     @throws ResponseStatusException se o produto não for encontrado.
     */

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductDTO findProductById(@PathVariable("id") Long id){
        log.info("Find Product by ID: %d".formatted(id));
        return productService.findById(id)
                .map(ProductUtil::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found "));

    }

    /**
     Rota para excluir um produto existente.
     @param id um Long representando o ID do produto a ser excluído.
     @throws ResponseStatusException se o produto não for encontrado.
     */

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable("id") Long id){
        log.info("Delete Product by ID: %d".formatted(id));
        productService.findById(id)
                .map(productFoundOnBase -> {
                    productService.deleteById(productFoundOnBase.getId());
                    return  Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

    }

    /**
     Rota para atualizar um produto existente.
     @param id um Long representando o ID do produto a ser atualizado.
     @param productDTO um objeto productDTO representando o produto atualizado.
     @throws ResponseStatusException se o produto não for encontrado.
     */

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduct(@PathVariable("id") Long id,
                         @Valid @RequestBody ProductDTO productDTO){
        log.info("Update Product by ID: %d".formatted(id));
        productService.findById(id)
                .map(productFoundOnBase -> {
                    productService.save(productDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
    }

}