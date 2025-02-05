package com.hu22.producttrack.deloittenetworkingapp.controllers;

import com.hu22.producttrack.deloittenetworkingapp.dtos.CarPoolDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.PostDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.ProjectDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.services.PostService;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class PostController {
    @Autowired
    PostService postService;

    @PostMapping("/createPost")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<PostDto>> createPost(@RequestBody PostDto postDto) {
        return postService.createPost(postDto);
    }

    @GetMapping("/allPosts")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<PostDto>>> getAllPosts() {
        return postService.getAllPosts();
    }

    @DeleteMapping("/deletePost/{postId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Void>> deletePost(@PathVariable long postId) {
        return postService.deletePost(postId);
    }

    @PutMapping("/updatePost/{postId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<PostDto>> updatePost(@PathVariable long postId, @RequestBody PostDto postDto) {
        return postService.updatePost(postId, postDto);
    }

    @GetMapping("/posts/{postId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<PostDto>> getPostById(@PathVariable long postId) {
        return postService.getPostById(postId);
    }

    @PutMapping("/upVote/{postId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<PostDto>> upVote(@PathVariable long postId) {
        return postService.upVote(postId);
    }

    @PutMapping("/downVote/{postId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<PostDto>> downVote(@PathVariable long postId) {
        return postService.downVote(postId);
    }

    @GetMapping("/post/{userId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<PostDto>>> allPostCreatedBy(@PathVariable int userId) {
        return postService.allPostCreatedBy(userId);
    }
}