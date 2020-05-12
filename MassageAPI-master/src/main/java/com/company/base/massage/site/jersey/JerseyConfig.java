package com.company.base.massage.site.jersey;

import com.company.base.massage.site.businessLayer.ReviewServiceImpl;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@Component
@ApplicationPath("/app")
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
// регистрация REST контроллеров
        register(ReviewServiceImpl.class);
        packages("com.company.accenture.movies");
    }
}

