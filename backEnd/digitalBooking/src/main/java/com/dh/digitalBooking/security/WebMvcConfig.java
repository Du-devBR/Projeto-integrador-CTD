package com.dh.digitalBooking.security;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;
/**
 This class is used to configure the Web MVC for the application.
 It implements the WebMvcConfigurer interface and overrides its methods to customize the configuration.
 @author Carlos Alberto, Eduardo Ananias
 */
@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {
    /**
     Configures CORS mappings to allow requests from any origin and with specified methods, headers and credentials.
     @param registry the CORS registry to add mappings to
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    /**
     * Abstract class to ignore Hibernate properties in JSON serialization.
     */
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    abstract static class IgnoreHibernatePropertiesInSerialization {}

    /**
     * Configures message converters to use Jackson2 for JSON serialization and deserialization.
     * @param converters the list of message converters to add the Jackson2 converter to
     */
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        mapper.addMixIn(Object.class, IgnoreHibernatePropertiesInSerialization.class);
        converters.add(new MappingJackson2HttpMessageConverter());
    }
}
