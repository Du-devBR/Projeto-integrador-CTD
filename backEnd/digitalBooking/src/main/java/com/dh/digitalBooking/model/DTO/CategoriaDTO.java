package com.dh.digitalBooking.model.DTO;


import com.dh.digitalBooking.model.CategoriaModel;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoriaDTO {
    private String qualificacao;
    private String decricao;

    public CategoriaDTO(CategoriaModel categoriaModel){
        this.decricao = categoriaModel.getDescricao();
        this.qualificacao = categoriaModel.getQualificacao();
    }

}


