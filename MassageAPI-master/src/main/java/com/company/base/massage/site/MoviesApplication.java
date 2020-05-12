package com.company.base.massage.site;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class MoviesApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(MoviesApplication.class, args);
        //new Main().configure(new SpringApplicationBuilder(Main.class)).run(args);
        ApplicationContext context =
                new AnnotationConfigApplicationContext("com/company/base/massage/site");
    }
}
