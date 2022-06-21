package Examination.Examinationhall_Info.repository;

import Examination.Examinationhall_Info.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

    List<User> findByUsername(String username);
}
