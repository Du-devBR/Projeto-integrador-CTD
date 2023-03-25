package com.dh.digitalBooking.util;

import com.dh.digitalBooking.entity.*;
import com.dh.digitalBooking.repository.*;
import com.dh.digitalBooking.service.*;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AddDataOnDB implements ApplicationRunner {

    private final ImageRepository imageRepository;
    private final ImageService imageService;
    private final RoleRepository roleRepository;
    private final RoleService roleService;
    private final UserRepository userRepository;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final CategoryRepository categoryRepository;
    private final CategoryService categoryService;
    private final CityService cityService;
    private final CityRepository cityRepository;

    public AddDataOnDB(RoleRepository roleRepository, ImageRepository imageRepository, ImageService imageService, RoleService roleService, UserRepository userRepository, UserService userService, PasswordEncoder passwordEncoder, CategoryRepository categoryRepository, CategoryService categoryService, CityService cityService, CityRepository cityRepository) {
        this.roleRepository = roleRepository;
        this.imageRepository = imageRepository;
        this.imageService = imageService;
        this.roleService = roleService;
        this.userRepository = userRepository;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.categoryRepository = categoryRepository;
        this.categoryService = categoryService;
        this.cityService = cityService;
        this.cityRepository = cityRepository;
    }

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
                    .login("admin@teste.com")
                    .password(passwordEncoder.encode("tchotchozaManda"))
                    .imageURL(imageService.findById(1L).get())
                    .role(roleService.findById(1L).get()).build());

        if(userService.findById(2L).isEmpty())
            userRepository.save(User.builder()
                    .id(2L)
                    .name("Doginho")
                    .lastName("Caramelo")
                    .login("doginho@teste.com")
                    .password(passwordEncoder.encode("123456"))
                    .imageURL(imageService.findById(2L).get())
                    .role(roleService.findById(2L).get()).build());

        if(categoryService.findById(1L).isEmpty())
            categoryRepository.save(Category.builder()
                    .id(1L)
                    .name("Hotel")
                    .imageURL(imageService.findById(3L).get()).build());

        if(cityService.findById(1L).isEmpty())
            cityRepository.save(City.builder()
                    .id(1L)
                    .name("Rio de Janeiro")
                    .state("RJ")
                    .country("Brasil").build());

        if(cityService.findById(1L).isEmpty())
            cityRepository.save(City.builder()
                    .id(2L)
                    .name("São Paulo")
                    .state("SP")
                    .country("Brasil").build());

    }
}