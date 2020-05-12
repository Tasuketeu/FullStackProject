package com.company.base.massage.site.interfaces;


import com.company.base.massage.site.objModelClass.Review;

import java.util.List;

public interface IContainReviews {
    public Review addReview(String review, String login);
    public List<Review> getAllReviews();
}
