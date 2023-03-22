package com.dh.digitalBooking.controller;


import com.dh.digitalBooking.model.DTO.CategoriaDTO;
import com.dh.digitalBooking.model.CategoriaModel;
import com.dh.digitalBooking.service.CategoriaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    CategoriaService service;

    @PostMapping
    public CategoriaModel salvar(@RequestBody CategoriaModel categoriaModel){
        return service.salvar(categoriaModel);
    }
    @GetMapping
    public List<CategoriaDTO> buscarTodos(){
      return service.buscarTodos();
    }

    @PatchMapping
    public CategoriaModel alterar(@RequestBody CategoriaModel categoriaModel){
        return service.alterar(categoriaModel);
    }

    @DeleteMapping
    public void excluir(@RequestParam("id")Long id){
       service.excluir(id);
    }
    @RequestMapping(value = "/buscaId", method = RequestMethod.GET)
    public ResponseEntity buscarPorId(@RequestParam("id")Long id){
        ObjectMapper mapper = new ObjectMapper();

        Optional<CategoriaModel> categoriaModelOptional = service.buscarPorId(id);
        if(categoriaModelOptional.isEmpty()){
            new ResponseEntity("Categoria não foi encontrada", HttpStatus.NOT_FOUND);
        }

        CategoriaModel categoriaModel = categoriaModelOptional.get();
        CategoriaDTO categoriaDTO = mapper.convertValue(categoriaModel, CategoriaDTO.class);
        return new ResponseEntity(categoriaDTO, HttpStatus.OK);
    }


}
