package com.videoapplication.server.controller;

import com.videoapplication.server.model.File;
import com.videoapplication.server.model.Video;
import com.videoapplication.server.repo.VideoRepository;
import com.videoapplication.server.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/videos")
public class VideoController {
    @Autowired
    private VideoRepository videoRepository;

    @Autowired
    private FileService fileService;

    @GetMapping("")
    List<Video> index() {
        return videoRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    Video create(@RequestBody Video video) {
        return videoRepository.save(video);
    }

    @PutMapping("{id}")
    Video update(@PathVariable String id, @RequestBody Video video) {
        Video videoFromBd = videoRepository.findById(id).orElseThrow(RuntimeException::new);

        videoFromBd.setTitle(video.getTitle());
        videoFromBd.setDescription(video.getDescription());
        videoFromBd.setVideo(video.getVideo());
        videoFromBd.setMiniature(video.getMiniature());

        return videoRepository.save(videoFromBd);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    void delete(@PathVariable String id) {
        Video video = videoRepository.findById(id).orElseThrow(RuntimeException::new);
        videoRepository.delete(video);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "upload-file")
    File uploadFile(@RequestParam("file") MultipartFile multipartFile) {
        return fileService.uploadFile(multipartFile);
    }
}
