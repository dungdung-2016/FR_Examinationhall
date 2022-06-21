package Examination.Examinationhall_Info;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ExaminationhallInfoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExaminationhallInfoApplication.class, args);
	}

}
