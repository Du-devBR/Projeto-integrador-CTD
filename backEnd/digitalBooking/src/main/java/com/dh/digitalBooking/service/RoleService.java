package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.RoleDTO;
import com.dh.digitalBooking.entity.Role;
import com.dh.digitalBooking.repository.RoleRepository;
import com.dh.digitalBooking.util.RoleUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public RoleDTO save(RoleDTO roleDTO) {
        Role role = RoleUtil.convertToEntity(roleDTO);
        return RoleUtil.convertToDTO(roleRepository.save(role));
    }

    public List<RoleDTO> findAll(){
        return roleRepository.findAll()
                .stream()
                .map(RoleUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<Role> findById(Long id){
        return roleRepository.findById(id);
    }

    public void deleteById(Long id){
        roleRepository.deleteById(id);
    }
}
