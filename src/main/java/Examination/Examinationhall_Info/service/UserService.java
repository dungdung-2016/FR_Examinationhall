package Examination.Examinationhall_Info.service;

import Examination.Examinationhall_Info.domain.User;
import Examination.Examinationhall_Info.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 회원 가입(+ 중복 회원 검증)
 * 회원 조회
 */

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userJpaRepository;

    /**
     * 회원 가입
     */
    //==회원 가입==//
    public Long join(User user){
        validateDuplicateUser(user);
        userJpaRepository.save(user);
        return user.getId();
    }

    //==중복 회원 검증==//
    private void validateDuplicateUser(User user) {
        List<User> findUsers = userJpaRepository.findByUsername(user.getUsername());
        if(!findUsers.isEmpty()){
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    /**
     * 회원 조회
     */
    //==회원 한 명 조회==//
    @Transactional(readOnly = true)
    public User findOneUser(Long userId){
        return userJpaRepository.findById(userId).orElseThrow();
    }

    //==전체 회원 조회==//
    @Transactional(readOnly = true)
    public List<User> findUsers(){
        return userJpaRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<User> findByName(String username){
        if(username == null){
            throw new NullPointerException("회원 이름이 아직 입력되지 않았습니다.");
        }
        return userJpaRepository.findByUsername(username);
    }




}
