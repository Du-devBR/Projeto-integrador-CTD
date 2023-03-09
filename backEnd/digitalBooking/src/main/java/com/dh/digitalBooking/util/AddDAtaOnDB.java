package com.dh.digitalBooking.util;

import com.dh.digitalBooking.entity.Category;
import com.dh.digitalBooking.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

public class AddDAtaOnDB implements ApplicationRunner {

    @Autowired private CategoryRepository categoryRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

    }
}
