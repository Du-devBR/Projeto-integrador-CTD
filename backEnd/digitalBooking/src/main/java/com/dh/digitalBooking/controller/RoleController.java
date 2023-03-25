package com.dh.digitalBooking.controller;


import com.dh.digitalBooking.dto.RoleDTO;
import com.dh.digitalBooking.service.RoleService;
import com.dh.digitalBooking.util.RoleUtil;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 A controller class that handles HTTP requests related to roles.
 Uses SLF4J for logging and enables Cross-Origin Resource Sharing (CORS).
 */
@Slf4j
@RestController
@RequestMapping("/api/funcao")
public class RoleController {
    /**
     Service class that provides business logic related to roles.
     */
    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    /**
     Retrieves a list of all roles.
     @return a list of RoleDTO objects containing information about each role
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<RoleDTO> listRoles(){
        log.info("Role All Categories");
        return roleService.findAll();
    }

    /**
     Saves a new role.
     @param roleDTO the RoleDTO object containing information about the role to be saved
     @return a RoleDTO object containing information about the newly saved role
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public RoleDTO save(@Valid @RequestBody RoleDTO roleDTO){
        log.info("Creating Role: %s".formatted(roleDTO.getDescription()));
        return roleService.save(roleDTO);
    }

    /**
     Retrieves information about a specific role.
     @param id the ID of the role to retrieve
     @return a RoleDTO object containing information about the role
     @throws ResponseStatusException if the specified role cannot be found
     */
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RoleDTO findRoleById(@PathVariable("id") Long id){
        log.info("Find Role by ID: %d".formatted(id));
        return roleService.findById(id)
                .map(RoleUtil::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Role not found"));
    }

    /**
     Deletes a specific role.
     @param id the ID of the role to delete
     @throws ResponseStatusException if the specified role cannot be found
     */
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

    /**
     Updates a specific role.
     @param id the ID of the role to update
     @param roleDTO the RoleDTO object containing updated information about the role
     @throws ResponseStatusException if the specified role cannot be found
     */
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
