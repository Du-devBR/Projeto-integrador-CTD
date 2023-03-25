package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.RoleDTO;
import com.dh.digitalBooking.entity.Role;
import com.dh.digitalBooking.repository.RoleRepository;
import com.dh.digitalBooking.util.RoleUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 This class represents the service layer of Role which is responsible for
 handling business logic for Role entity.
 */
@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    /**
     Saves the given RoleDTO entity to the database.
     @param roleDTO the RoleDTO entity to be saved.
     @return the RoleDTO entity after being saved to the database.
     */
    public RoleDTO save(RoleDTO roleDTO) {
        Role role = RoleUtil.convertToEntity(roleDTO);
        return RoleUtil.convertToDTO(roleRepository.save(role));
    }

    /**
     Finds all Role entities in the database.
     @return a List of all RoleDTO entities.
     */
    public List<RoleDTO> findAll(){
        return roleRepository.findAll()
                .stream()
                .map(RoleUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     Finds the Role entity with the given id in the database.
     @param id the id of the Role entity to be found.
     @return an Optional object that contains the Role entity with the given id,
     or an empty Optional object if no such entity exists.
     */
    public Optional<Role> findById(Long id){
        return roleRepository.findById(id);
    }

    /**

     Deletes the Role entity with the given id from the database.
     @param id the id of the Role entity to be deleted.
     */
    public void deleteById(Long id){
        roleRepository.deleteById(id);
    }
}
