package Examination.Examinationhall_Info.domain;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 회원 엔티티
 */
@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "USERS")
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name ="user_id")
    private Long id;

    @Column(nullable = false,length = 50 ) //not null
    private String username; //회원 이름

    @Column(nullable = false,length = 50)
    private String email; //이메일: 로그인 시 id로 사용

    @Column(nullable = false, length = 50)
    private String password; //비밀번호

    @Enumerated(EnumType.STRING)
    private UserJob userJob; // 학생, 강사



    @OneToMany (mappedBy = "users",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Post> posts = new ArrayList<>();

    @OneToMany (mappedBy = "users",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "users",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Like> likes = new ArrayList<>();

    @Builder
    public User(String username,String email,String password,UserJob userJob){
        this.username=username;
        this.email=email;
        this.password=password;
        this.userJob=userJob;
    }




}
