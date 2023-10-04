package com.example.tofu.tofu.controller;

import com.example.tofu.tofu.dto.RankTofuDtoResponse;
import com.example.tofu.tofu.service.TofuService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@AllArgsConstructor
@Slf4j
public class TofuController {

    private final TofuService tofuService;

    @PostMapping("/v1/mbtiResult")
    public ResponseEntity<String> calculateMbti(@RequestBody Map<String, String> answerKey){
        log.info("결정된 result1 : {}", tofuService.findMbti(answerKey));
        String str = tofuService.findMbti(answerKey);
        Map<String, String> map = new HashMap<>();
        map.put("mbti", str);
        return ResponseEntity.ok(str);
    }

    @GetMapping("/v1/rank")
    public ResponseEntity<List<RankTofuDtoResponse>> rank(){

        return ResponseEntity.ok(tofuService.allTofuRank());
    }
}
