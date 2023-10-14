package com.example.tofu.tofu.service;


import com.example.tofu.tofu.domain.Visitor;
import com.example.tofu.tofu.repository.VisitorRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class VisitorService {

    private final VisitorRepository visitorRepository;
    private static Long allVisitor = 0L;

    public Long visitor(Map<String, String> key, HttpServletRequest request) {

        String jsessionid = key.get("jsessionid");

        String timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        try {
            Optional<Visitor> visitorOptional = visitorRepository.findByVisitorJsessionid(jsessionid);
            Visitor visitor;


            if (visitorOptional.isPresent()) {       // 첫 방문자
                visitor = visitorOptional.get();
                visitor.updateCurrentTime(timestamp);
            } else {    // 신규 방문자
                visitor = createClient(jsessionid, timestamp);
                allVisitor++;
            }
            String logMessage = String.format("Visitor from visitorJsessionid: %s at %s\n", visitor.getVisitorJsessionid(), visitor.getTimestamp());
            writeLogToFile(logMessage);
        }catch (Exception e) {
            log.info("jsessionid를 찾을 수없습니다");
        }
        return allVisitor;
    }

    private String popCookies(Cookie[] cookies) {
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("jsessionid")) {
                    String value = cookie.getValue();
                    return value;
                }
            }
        }
        return null;
    }


    private Visitor createClient(String visitorJsessionid, String timestamp) {
        Visitor visitor = Visitor.builder()
                .visitorJsessionid(visitorJsessionid)
                .timestamp(timestamp)
                .build();
        return visitorRepository.save(visitor);
    }

    private void writeLogToFile(String message) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("visitor.log", true))) {
            writer.write(message);
            writer.newLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
