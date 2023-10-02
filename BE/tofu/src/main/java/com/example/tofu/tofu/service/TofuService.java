package com.example.tofu.tofu.service;

import com.example.tofu.tofu.domain.Tofu;
import com.example.tofu.tofu.dto.RankTofuDtoResponse;
import com.example.tofu.tofu.repository.TofuRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
@Slf4j
public class TofuService {

    private final TofuRepository tofuRepository;
    private List<RankTofuDtoResponse> rankTofuDtoResponses = new ArrayList<>();
    private List<Tofu> tofus = new ArrayList<>();


    public String findMbti(Map<String, String> answerKey){

        String mbti = calculate(answerKey);

        seqMbti(mbti);

        return mbti;
    }

    public List<RankTofuDtoResponse> allTofuRank(){

        tofus = tofuRepository.findAll();

        for (Tofu tofu : tofus) {
            RankTofuDtoResponse rankTofuDtoResponse = RankTofuDtoResponse.builder()
                    .seq(tofu.getSeq())
                    .mbti(tofu.getMbti())
                    .build();
            rankTofuDtoResponses.add(rankTofuDtoResponse);
        }

        return rankTofuDtoResponses;
    }



    private String calculate(Map<String, String> answerKey){
        int E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;
        StringBuffer mbti = new StringBuffer();

        for (Map.Entry<String, String> entry : answerKey.entrySet()) {
            switch (entry.getValue()) {
                case "E" :
                    E++;
                    break;
                case "I" :
                    I++;
                    break;
                case "S" :
                    S++;
                    break;
                case "N" :
                    N++;
                    break;
                case "T" :
                    T++;
                    break;
                case "F" :
                    F++;
                    break;
                case "J" :
                    J++;
                    break;
                case "P" :
                    P++;
                    break;
                default:
                    log.info("잘못된 entry");
            }
        }

        mbti.append(E>I ? "E" : "I");
        mbti.append(N>S ? "N" : "S");
        mbti.append(T>F ? "T" : "F");
        mbti.append(J>P ? "J" : "P");

        return mbti.toString();
    }

    private void seqMbti(String mbti) {
        Tofu findTofu = tofuRepository.findByMbti(mbti).get();

        Long currentSeq = findTofu.getSeq() + 1L;

        findTofu.setSeq(currentSeq);

        tofuRepository.save(findTofu);
    }
}
