package com.videoapplication.server.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//import javax.annotation.Generated;


@Data
@Document
public class Video {

    @Id
    private String id;
    private String title;
    private String description;
    private String videoUrl;
    private String miniatureUrl;




    public Video(String title, String description, String videoUrl, String miniatureUrl) {
        this.title = title;
        this.description = description;
        this.videoUrl = videoUrl;
        this.miniatureUrl = miniatureUrl;
    }
}
