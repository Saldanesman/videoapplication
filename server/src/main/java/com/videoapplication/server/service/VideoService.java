package com.videoapplication.server.service;

import com.videoapplication.server.model.File;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class VideoService {

    @Autowired
    public S3Service s3Service;

    public void uploadFile(MultipartFile multipartFile){
        File fileURL = s3Service.uploadFile(multipartFile);
    }
}
