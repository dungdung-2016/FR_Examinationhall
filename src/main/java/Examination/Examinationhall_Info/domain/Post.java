package Examination.Examinationhall_Info.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Post 엔티티
 * 사진,comment 와 함께 게시글 작성
 */
@Entity
@Getter @Setter
@NoArgsConstructor (access = AccessLevel.PROTECTED)
@Table(name = "POSTS")
public class Post extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name ="post_id")
    private Long id;

    private String content;
    private String picture;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")//외래키 mapping 할 때 사용.name 속성에는 mapping 할 fk 이름
    private User users;

    @OneToMany (mappedBy = "posts",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Comment> comments =new ArrayList<>();

    @OneToMany (mappedBy = "posts",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Like> likes =new ArrayList<>();


}
