package com.example.tofu.tofu.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class RankTofuDtoResponse {

    private String mbti;

    private Long seq;
}
