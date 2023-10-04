package com.example.tofu.tofu.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor
@Builder
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String visitorIp;

    private String timestamp;


    public void updateCurrentTime(String timestamp) {
        this.timestamp = timestamp;
    }

    @Builder
    public Visitor(Long id, String VisitorIp, String timestamp) {
        this.id = id;
        this.visitorIp = VisitorIp;
        this.timestamp = timestamp;
    }
}
