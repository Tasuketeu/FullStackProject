package com.company.base.massage.site.objModelClass;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDate;

@Entity(name = "Review")
@Table(name = "tb_reviews")
public class Review {
    @JsonProperty("id")
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movie")
    @Column(name="id", updatable = false, nullable = false)
    private Long id;

    @JsonProperty("review")
    @Column(name="review")
    private String review;

    @JsonProperty("login")
    @Column(name="login")
    private String login;

    @JsonProperty("date")
    @Column(name="date")
    private LocalDate date;

    public Review(String review, String login, LocalDate date) {
        this.review = review;
        this.login = login;
        this.date = date;
    }
    public Review() { }
}
