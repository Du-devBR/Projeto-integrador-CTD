package com.dh.digitalBooking.util;

import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.entity.Image;
import com.dh.digitalBooking.entity.Role;
import com.dh.digitalBooking.entity.User;
import com.dh.digitalBooking.repository.CategoryRepository;
import com.dh.digitalBooking.repository.ImageRepository;
import com.dh.digitalBooking.repository.RoleRepository;
import com.dh.digitalBooking.repository.UserRepository;
import com.dh.digitalBooking.service.CategoryService;
import com.dh.digitalBooking.service.ImageService;
import com.dh.digitalBooking.service.RoleService;
import com.dh.digitalBooking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AddDataOnDB implements ApplicationRunner {

    @Autowired private ImageRepository imageRepository;

    @Autowired private ImageService imageService;

    @Autowired private RoleRepository roleRepository;

    @Autowired private RoleService roleService;
    @Autowired private UserRepository userRepository;
    @Autowired private UserService userService;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private CategoryRepository categoryRepository;

    @Autowired private CategoryService categoryService;
    @Override
    public void run(ApplicationArguments args) {

        if (imageService.findById(1L).isEmpty())
            imageRepository.save(Image.builder()
                    .id(1L)
                    .description("Imagem Usuário Admin")
                    .url("https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg")
                    .build());

        if(imageService.findById(2L).isEmpty())
            imageRepository.save(Image.builder()
                    .id(2L)
                    .description("Imagem Usuário Comum")
                    .url("https://cdn-icons-png.flaticon.com/512/149/149071.png")
                    .build());

        if(imageService.findById(3L).isEmpty())
            imageRepository.save(Image.builder()
                    .id(3L)
                    .description("Imagem Categoria Hotel")
                    .url("https://hotelcenter.com.br/blog/wp-content/uploads/2016/11/como-e-definida-a-classificacao-por-estrelas-dos-hoteis--1000x563.jpg")
                    .build());

        if(roleService.findById(1L).isEmpty())
            roleRepository.save(Role.builder()
                    .id(1L)
                    .Name("ADMIN")
                    .Description("Direito de Administrador")
                    .build());

        if(roleService.findById(2L).isEmpty())
            roleRepository.save(Role.builder()
                    .id(2L)
                    .Name("USER")
                    .Description("Usuário Comum")
                    .build());

        if(userService.findById(1L).isEmpty())
            userRepository.save(User.builder()
                    .id(1L)
                    .name("Tchotchoza")
                    .lastName("Tchan")
                    .email("admin@teste.com")
                    .passwordHash(passwordEncoder.encode("tchotchozaManda"))
                    .imageURL(imageService.findById(1L).get())
                    .role(roleService.findById(1L).get()).build());

        if(userService.findById(2L).isEmpty())
            userRepository.save(User.builder()
                    .id(2L)
                    .name("Doginho")
                    .lastName("Caramelo")
                    .email("doginho@teste.com")
                    .passwordHash(passwordEncoder.encode("123456"))
                    .imageURL(imageService.findById(2L).get())
                    .role(roleService.findById(2L).get()).build());

        if(categoryService.findById(1L).isEmpty())
            categoryRepository.save(Category.builder()
                    .id(1L)
                    .name("Hotel")
                    .imageURL(imageService.findById(3L).get()).build());
    }
}
