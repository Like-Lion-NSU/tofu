package com.example.tofu.tofu.repository;

import com.example.tofu.tofu.domain.Tofu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TofuRepository extends JpaRepository<Tofu, Long> {

    Optional<Tofu> findByMbti(String mbti);
}
