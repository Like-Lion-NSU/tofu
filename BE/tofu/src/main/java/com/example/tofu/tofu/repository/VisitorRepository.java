package com.example.tofu.tofu.repository;

import com.example.tofu.tofu.domain.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VisitorRepository extends JpaRepository<Visitor, Long> {

    Optional<Visitor> findByVisitorIp(String visitorIp);
}
