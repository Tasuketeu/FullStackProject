package com.company.base.massage.site.controllers;

import com.company.base.massage.site.interfaces.IContainReviews;
import com.company.base.massage.site.objModelClass.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.*;
import java.util.List;

@Repository
@Component
@RestController
public class ReviewController {

    @Autowired
    IContainReviews usi;

    @POST
    @RequestMapping("/review")
    public Review addReview(@QueryParam("review") String review, @QueryParam("login") String login) {
        return usi.addReview(review,login);
    }

    @GET
    @RequestMapping("/review/views")
    public List<Review> getAllReviews(){
        return usi.getAllReviews();
    }
}