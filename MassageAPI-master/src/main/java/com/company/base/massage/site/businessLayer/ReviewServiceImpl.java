package com.company.base.massage.site.businessLayer;

import com.company.base.massage.site.interfaces.IContainReviews;
import com.company.base.massage.site.interfaces.ReviewRepository;
import com.company.base.massage.site.objModelClass.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import java.time.LocalDate;
import java.util.*;

@Repository
@Component
@RestController
public class ReviewServiceImpl implements IContainReviews {

    @Autowired
    private ReviewRepository reviewRepo;

    @Override
    @POST
    @Transactional
    public Review addReview(@QueryParam("review") String review, @QueryParam("login") String login) {
        Review rev = null;
            LocalDate date = LocalDate.now();
             rev = reviewRepo.save(new Review(review, login, date));
        return rev;
    }

    @Override
    @GET
    @Transactional
    public List<Review> getAllReviews(){
        List<Review> reviews=new ArrayList<>();
        reviewRepo.findAll().forEach(reviews::add);
        return reviews;
    }

}

