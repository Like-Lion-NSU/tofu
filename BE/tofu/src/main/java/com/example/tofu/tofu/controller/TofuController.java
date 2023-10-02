package com.example.tofu.tofu.controller;

import com.example.tofu.tofu.dto.RankTofuDtoResponse;
import com.example.tofu.tofu.service.TofuService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@Controller
@AllArgsConstructor
public class TofuController {

    private final TofuService tofuService;

    @PostMapping("/api/mbti")
    public String calculateMbti(@RequestBody Map<String, String> answerKey){
        return tofuService.findMbti(answerKey);
    }

    @GetMapping("/api/rank")
    public List<RankTofuDtoResponse> rank(){
        return tofuService.allTofuRank();
    }
}
