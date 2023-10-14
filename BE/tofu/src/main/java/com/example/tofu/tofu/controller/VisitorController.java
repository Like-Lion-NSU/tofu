package com.example.tofu.tofu.controller;

import com.example.tofu.tofu.service.VisitorService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@AllArgsConstructor
@Slf4j
public class VisitorController {

    private final VisitorService visitorService;

    @PostMapping("/v1/visitor")
    public ResponseEntity<String> ClientAllNumber(@RequestBody Map<String, String> key, HttpServletRequest request) {
        return ResponseEntity.ok(String.valueOf(visitorService.visitor(key, request)));
    }
}
