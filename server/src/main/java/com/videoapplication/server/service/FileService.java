package com.videoapplication.server.service;

import com.videoapplication.server.model.File;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    File uploadFile(MultipartFile multipartFile);
}
