package com.videoapplication.server.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.videoapplication.server.model.File;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class S3Service implements FileService {

    public static final String BUCKET_NAME = "videoapplication";
    private final AmazonS3Client awsS3Client;

    @Override
    public File uploadFile(MultipartFile multipartFile){
        String fileExtension = StringUtils.getFilenameExtension(multipartFile.getOriginalFilename());

        String key = UUID.randomUUID() + "." + fileExtension;

        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(multipartFile.getSize());
        metadata.setContentType(multipartFile.getContentType());

        try {
            awsS3Client.putObject(BUCKET_NAME, key, multipartFile.getInputStream(), metadata);
        } catch (IOException ioException) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "An Exception occurred while uploading the file");
        }

        awsS3Client.setObjectAcl(BUCKET_NAME, key, CannedAccessControlList.PublicRead);
        String url = awsS3Client.getResourceUrl(BUCKET_NAME, key);

        return new File(key, url);
    }
}
