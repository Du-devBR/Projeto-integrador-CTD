package com.dh.digitalBooking.service;


import com.dh.digitalBooking.model.DTO.CategoriaDTO;
import com.dh.digitalBooking.model.CategoriaModel;
import com.dh.digitalBooking.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {


    @Autowired
    CategoriaRepository repository;


    public CategoriaModel salvar(CategoriaModel categoriaModel){
        return repository.save(categoriaModel);
    }

    public List<CategoriaDTO> buscarTodos(){
        List<CategoriaModel> listCategoria = repository.findAll();
        List<CategoriaDTO> listCategoriaDTO = new ArrayList<>();
        for (CategoriaModel c : listCategoria){
            listCategoriaDTO.add(new CategoriaDTO(c));
        }
        return listCategoriaDTO;
    }

    public CategoriaModel alterar(CategoriaModel categoriaModel){
        return repository.save(categoriaModel);
    }

    public CategoriaModel excluir(Long id){
        repository.deleteById(id);
        return null;
    }


    public Optional<CategoriaModel> buscarPorId(Long id) {
        return repository.findById(id);
    }
//        List<CategoriaDTO> listCategoriaDTO = new ArrayList<>();
//        for (CategoriaModel c : listCategoria){
//            listCategoriaDTO.add(new CategoriaDTO(c));
//        }
//        return listCategoriaDTO;


}
