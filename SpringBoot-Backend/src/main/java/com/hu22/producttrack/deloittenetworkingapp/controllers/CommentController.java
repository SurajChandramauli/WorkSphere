package com.hu22.producttrack.deloittenetworkingapp.controllers;


import com.hu22.producttrack.deloittenetworkingapp.dtos.CarPoolDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.CommentDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.PostDto;
import com.hu22.producttrack.deloittenetworkingapp.services.CommentService;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("/addComment")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<CommentDto>> addComment(@RequestBody CommentDto commentDto) {
        return commentService.addComment(commentDto);
    }

    @GetMapping("/allComments")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<CommentDto>>> getAllComments() {
        return commentService.getAllComments();
    }

    @DeleteMapping("/deleteComment/{commentId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Void>> deleteComment(@PathVariable long commentId) {
        return commentService.deleteComment(commentId);
    }

    @PutMapping("/editComment/{commentId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<CommentDto>> editComment(@PathVariable long commentId, @RequestBody CommentDto commentDto) {
        return commentService.editComment(commentId, commentDto);
    }
}
