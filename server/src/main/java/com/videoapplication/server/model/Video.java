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
    //private byte[] data;

    public Video(String title, String description) {
        this.title = title;
        this.description = description;
        //this.data = data;
    }
}
