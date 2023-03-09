package com.dh.digitalBooking.controller;



import com.dh.digitalBooking.dto.RoleDTO;
import com.dh.digitalBooking.service.RoleService;
import com.dh.digitalBooking.util.RoleUtil;
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
@RequestMapping("/api/funcao")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<RoleDTO> listRoles(){
        log.info("Role All Categories");
        return roleService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public RoleDTO save(@Valid @RequestBody RoleDTO roleDTO){
        log.info("Creating Role: %s".formatted(roleDTO.getDescription()));
        return roleService.save(roleDTO);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RoleDTO findRoleById(@PathVariable("id") Long id){
        log.info("Find Role by ID: %d".formatted(id));
        return roleService.findById(id)
                .map(RoleUtil::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Role not found"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCategory(@PathVariable("id") Long id) {
        log.info("Delete Role by ID: %d".formatted(id));
        roleService.findById(id)
                .map(RoleFoundOnBase -> {
                    roleService.deleteById(RoleFoundOnBase.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Role not found"));
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCategory(@PathVariable("id") Long id,
                               @Valid @RequestBody RoleDTO roleDTO) {
        log.info("Update Role by ID: %d".formatted(id));
        roleService.findById(id)
                .map(RoleFoundOnBase -> {
                    roleService.save(roleDTO);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Role not found"));
    }
}
