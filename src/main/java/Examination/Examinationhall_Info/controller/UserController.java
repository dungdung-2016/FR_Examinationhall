package Examination.Examinationhall_Info.controller;

import Examination.Examinationhall_Info.domain.User;
import Examination.Examinationhall_Info.domain.UserJob;
import Examination.Examinationhall_Info.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


/**
 * 회원 등록, 저장
 */
@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    //==회원 등록 폼 화면==//
    @GetMapping(value = "/users/new")
    public String createForm(Model model){
        model.addAttribute("userForm",new UserForm());
        return "users/userForm";
    }

    //==회원 등록==//
    @PostMapping("/users/new")
    public String create(@Validated UserForm form, BindingResult result){
        if(result.hasErrors()){ //검증
            return "users/userForm";
        }
        User user = new User(form.getUsername(),form.getEmail(),form.getPassword(),form.getUserjob());
        userService.join(user);
        return "redirect:/";
    }

    @ModelAttribute("userJobTypes")
    public UserJob[] userJobTypes(){
        return UserJob.values();
    }



}
