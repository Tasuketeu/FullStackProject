package com.company.base.massage.site.interfaces;

import com.company.base.massage.site.objModelClass.Review;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends CrudRepository<Review,Long> {
    List<Review> findAll();
}
