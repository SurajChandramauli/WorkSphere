package com.hu22.producttrack.deloittenetworkingapp.services;

import com.hu22.producttrack.deloittenetworkingapp.dtos.CommentDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.PostDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.CarPoolDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.CommentDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.PostDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
import com.hu22.producttrack.deloittenetworkingapp.repositories.CommentRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.PostRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.UserRepository;
import com.hu22.producttrack.deloittenetworkingapp.utils.ObjectMapperUtils;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
        @Autowired
        CommentRepository commentRepository;

        @Autowired
        PostRepository postRepository;

        @Autowired
        UserRepository userRepository;

        public ResponseEntity<ResponseWrapper<CommentDto>> addComment(CommentDto commentDto) {
//            Optional<UserDo> existingUser = userRepository.findById(commentDto.getAuthor().getUserId());
//            if (!existingUser.isPresent()) {
//                return new ResponseEntity<>(
//                        new ResponseWrapper<>("Author with given used id doesn't exist", null),
//                        HttpStatus.BAD_REQUEST);
//            }
            Optional<PostDo> existingPost = postRepository.findById((commentDto.getPost()));
            if(!existingPost.isPresent()){
                return new ResponseEntity<>(
                        new ResponseWrapper<>("Post with given post id doesn't exist", null),
                        HttpStatus.BAD_REQUEST);
            }
            Optional<UserDo> existingUser = userRepository.findById(commentDto.getAuthorId());
            if(!existingUser.isPresent()){
                return new ResponseEntity<>(
                        new ResponseWrapper<>("Author with given used id doesn't exist", null),
                        HttpStatus.BAD_REQUEST);
            }
            CommentDo commentDo = ObjectMapperUtils.mapCommentDtoToDo(commentDto);
//            commentDo.setAuthor(existingUser);
            commentDo=commentRepository.save(commentDo);
            CommentDto commentDtoReturned=ObjectMapperUtils.mapCommentDoToDto(commentDo);
            return new ResponseEntity(new ResponseWrapper<>("Comment is added successfully", commentDtoReturned), HttpStatus.CREATED);
        }

        public ResponseEntity<ResponseWrapper<List<CommentDto>>> getAllComments() {
            List<CommentDo> commentList = commentRepository.findAll();
            if (commentList.isEmpty()) {
                return new ResponseEntity<>(
                        new ResponseWrapper<>("No comment is added yet", null),
                        HttpStatus.NOT_FOUND);
            }
            List<CommentDto> commentDtoList = ObjectMapperUtils.mapAllCommentDoToDto(commentList);
            return ResponseEntity.ok(new ResponseWrapper<>("Success", commentDtoList));
        }

    public ResponseEntity<ResponseWrapper<Void>> deleteComment(Long commentId) {
        Optional<CommentDo> existingComment = commentRepository.findById(commentId);
        if (!existingComment.isPresent()) {
            return new ResponseEntity(
                    new ResponseWrapper<>("Comment with given id does not exists", null),
                    HttpStatus.NOT_FOUND);
        }
        commentRepository.deleteById(commentId);
        return ResponseEntity.ok(new ResponseWrapper<>("Comment is successfully deleted", null));

    }
    public ResponseEntity<ResponseWrapper<CommentDto>> editComment(long commentId, CommentDto commentDto) {
        Optional<CommentDo> existingComment = commentRepository.findById(commentId);
        if (!existingComment.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Comment with given id doesn't exists", null),
                    HttpStatus.NOT_FOUND);
        }
        CommentDo commentDo = ObjectMapperUtils.mapCommentDtoToDo(commentDto);
        commentDo.setCommentId(commentId);
        commentDo = commentRepository.save(commentDo);
        CommentDto commentDtoReturned = ObjectMapperUtils.mapCommentDoToDto(commentDo);
        return ResponseEntity.ok(new ResponseWrapper<>("Comment updated successfully", commentDtoReturned));
    }
    }
