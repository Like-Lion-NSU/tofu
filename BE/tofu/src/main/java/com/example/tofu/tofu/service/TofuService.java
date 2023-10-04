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
    private List<Tofu> tofus = new ArrayList<>();

    public String findMbti(Map<String, String> answerKey){

        String result = calculate(answerKey);

        seqMbti(result);

        return result;    }

    public List<RankTofuDtoResponse> allTofuRank(){
        List<RankTofuDtoResponse> rankTofuDtoResponses = new ArrayList<>();
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
//        Long E = 0L, I = 0L, S = 0L, N = 0L, T = 0L, F = 0L, J = 0L, P = 0L;
        StringBuilder mbti = new StringBuilder();
        StringBuilder str = new StringBuilder();
        //"['E','N','F','P','I','S','T','J','E','N','F','P']"
        String value = answerKey.get("mbtilist");

  /*      for (int i = 3; i < value.length(); i += 2) {
            str.append(value.charAt(i));
        }
        String s = str.toString();
        log.info("s : {}", s);
*/

        int E = (int) value.chars().filter(ch -> ch =='E').count();
        int I = (int) value.chars().filter(ch -> ch =='I').count();
        int S = (int) value.chars().filter(ch -> ch =='S').count();
        int N = (int) value.chars().filter(ch -> ch =='N').count();
        int T = (int) value.chars().filter(ch -> ch =='T').count();
        int F = (int) value.chars().filter(ch -> ch =='F').count();
        int J = (int) value.chars().filter(ch -> ch =='J').count();
        int P = (int) value.chars().filter(ch -> ch =='P').count();


        /*for (int i = 0; i<str.length(); i++) {
            switch (str) {
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
        }*/

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
