package Examination.Examinationhall_Info.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 도메인 주소 입력시 나오는 첫 화면
 */
@Controller
@RequiredArgsConstructor
@Slf4j
public class HomeController {

    @GetMapping("/")
    public String home(){
        return "Home";
    }



}
