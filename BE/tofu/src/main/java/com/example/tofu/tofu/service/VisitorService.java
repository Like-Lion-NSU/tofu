package com.example.tofu.tofu.service;


import com.example.tofu.tofu.domain.Visitor;
import com.example.tofu.tofu.repository.VisitorRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class VisitorService {

    private final VisitorRepository visitorRepository;
    private static Long allVisitor = 0L;

    public Long visitor(HttpServletRequest request) {

        HttpSession session = request.getSession();
        String ip = session.getId();
        String timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        Optional<Visitor> visitorOptional = visitorRepository.findByVisitorIp(ip);
        Visitor visitor;


        if (visitorOptional.isPresent()) {       // 첫 방문자
            visitor = visitorOptional.get();
            visitor.updateCurrentTime(timestamp);
        } else {    // 신규 방문자
            visitor = createClient(ip, timestamp);
            allVisitor++;
        }
        String logMessage = String.format("Visitor from IP: %s at %s\n", visitor.getVisitorIp(), visitor.getTimestamp());
        writeLogToFile(logMessage);

        return allVisitor;
    }


    private Visitor createClient(String visitorIp, String timestamp) {
        Visitor visitor = Visitor.builder()
                .visitorIp(visitorIp)
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
