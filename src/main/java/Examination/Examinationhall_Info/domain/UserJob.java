package Examination.Examinationhall_Info.domain;

public enum UserJob {
    STUDENT("학생"),INSTRUCTOR("강사");

    private final String description;

    UserJob(String description){
        this.description = description;
    }
    public String getDescription(){
        return description;
    }

}
