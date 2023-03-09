package com.dh.digitalBooking.service;

import com.dh.digitalBooking.dto.ImageDTO;
import com.dh.digitalBooking.entity.ImageModel;
import com.dh.digitalBooking.repository.ImageRepository;
import com.dh.digitalBooking.util.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public ImageDTO save(ImageDTO imageDTO){
        ImageModel imageModel = ImageUtil.convetToEntity(imageDTO);
        return ImageUtil.convertToDTO(imageRepository.save(imageModel));
    }

    public List<ImageDTO> findAll(){
        return imageRepository.findAll()
                .stream()
                .map(ImageUtil::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<ImageModel> findById(Long id){
        return imageRepository.findById(id);
    }

    public void deleteById(Long id){
        imageRepository.deleteById(id);
    }
}
