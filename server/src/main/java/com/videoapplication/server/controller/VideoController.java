package com.videoapplication.server.controller;

import com.videoapplication.server.model.Video;
import com.videoapplication.server.repo.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/videos")
public class VideoController {
    @Autowired
    private VideoRepository videoRepository;

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
        videoFromBd.setVideoUrl(video.getVideoUrl());
        videoFromBd.setMiniatureUrl(video.getMiniatureUrl());

        return videoRepository.save(videoFromBd);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    void delete(@PathVariable String id) {
        Video video = videoRepository.findById(id).orElseThrow(RuntimeException::new);
        videoRepository.delete(video);
    }
}
