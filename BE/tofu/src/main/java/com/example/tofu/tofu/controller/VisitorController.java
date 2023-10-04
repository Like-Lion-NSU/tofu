package com.example.tofu.tofu.controller;

import com.example.tofu.tofu.service.VisitorService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@AllArgsConstructor
@Slf4j
public class VisitorController {

    private final VisitorService visitorService;

    @GetMapping("/v1/visitor")
    public ResponseEntity<String> ClientAllNumber(HttpServletRequest request) {
        return ResponseEntity.ok(String.valueOf(visitorService.visitor(request)));
    }
}
