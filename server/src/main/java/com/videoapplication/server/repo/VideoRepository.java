package com.videoapplication.server.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.videoapplication.server.model.Video;

public interface VideoRepository extends MongoRepository<Video, String> {
}
