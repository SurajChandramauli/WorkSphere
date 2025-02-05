package com.hu22.producttrack.deloittenetworkingapp.services;

import com.hu22.producttrack.deloittenetworkingapp.dtos.CarPoolDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.PostDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.ProjectDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.CarPoolDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.PostDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.ProjectDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
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
public class PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    UserRepository userRepository;

    public ResponseEntity<ResponseWrapper<PostDto>> createPost(PostDto postDto) {
        Optional<UserDo> existingUser = userRepository.findById(postDto.getUserId());
        if (!existingUser.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("User with given id doesn't exists", null),
                    HttpStatus.BAD_REQUEST);
        }
        PostDo postDo = ObjectMapperUtils.mapPostDtoToDo(postDto);
        postDo=postRepository.save(postDo);
        PostDto postDtoReturned=ObjectMapperUtils.mapPostDoToDto(postDo);
        return new ResponseEntity(new ResponseWrapper<>("Successfully created post", postDtoReturned), HttpStatus.CREATED);
    }

    public ResponseEntity<ResponseWrapper<List<PostDto>>> getAllPosts() {
        List<PostDo> postList = postRepository.findAll();
        if (postList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("No post is created yet", null),
                    HttpStatus.NOT_FOUND);
        }
        List<PostDto> postDtoList = ObjectMapperUtils.mapAllPostDoToDto(postList);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", postDtoList));
    }

    public ResponseEntity<ResponseWrapper<Void>> deletePost(long postId) {
        Optional<PostDo> existingPost = postRepository.findById(postId);
        if (!existingPost.isPresent()) {
            return new ResponseEntity(
                    new ResponseWrapper<>("The post with post id given does not exists", null),
                    HttpStatus.NOT_FOUND);
        }
        postRepository.deleteById(postId);
        return ResponseEntity.ok(new ResponseWrapper<>("Post is deleted successfully", null));

    }

    public ResponseEntity<ResponseWrapper<PostDto>> updatePost(long postId, PostDto postDto) {
        Optional<PostDo> existingPost = postRepository.findById(postId);
        if (!existingPost.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("No post found with given post id", null),
                    HttpStatus.NOT_FOUND);
        }
        PostDo postDo = ObjectMapperUtils.mapPostDtoToDo(postDto);
        postDo.setPostId(postId);
        postDo = postRepository.save(postDo);
        PostDto postDtoReturned = ObjectMapperUtils.mapPostDoToDto(postDo);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", postDtoReturned));
    }

    public ResponseEntity<ResponseWrapper<PostDto>> getPostById(long postId) {
        Optional<PostDo> existingPost = postRepository.findById(postId);
        if (!existingPost.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Post with given id does not exists", null),
                    HttpStatus.NOT_FOUND);
        }
        PostDto postDtoReturned =
                ObjectMapperUtils.mapPostDoToDto(existingPost.get());
        return ResponseEntity.ok(new ResponseWrapper<>("Success", postDtoReturned));
    }

    public ResponseEntity<ResponseWrapper<PostDto>> upVote(long postId) {

        Optional<PostDo> existingPost = postRepository.findById(postId);
        if (!existingPost.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Post with given id doesn't exists", null),
                    HttpStatus.BAD_REQUEST);
        }
        long votes=existingPost.get().getVote();
        Long up_vote=votes+1;
        existingPost.get().setVote(up_vote);
        PostDo postDo=postRepository.save(existingPost.get());
        PostDto postDtoReturned=ObjectMapperUtils.mapPostDoToDto(postDo);
        return new ResponseEntity(new ResponseWrapper<>("Post is successfully upvoted", postDtoReturned),
                HttpStatus.CREATED);
    }

    public ResponseEntity<ResponseWrapper<PostDto>> downVote(long postId) {

        Optional<PostDo> existingPost = postRepository.findById(postId);
        if (!existingPost.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Post with given id doesn't exists", null),
                    HttpStatus.BAD_REQUEST);
        }
        long votes=existingPost.get().getDVote();
        Long down_vote=votes+1;
        existingPost.get().setDVote(down_vote);
        PostDo postDo=postRepository.save(existingPost.get());
        PostDto postDtoReturned=ObjectMapperUtils.mapPostDoToDto(postDo);
        return new ResponseEntity(new ResponseWrapper<>("Post is successfully downVoted", postDtoReturned),
                HttpStatus.CREATED);
    }

    public ResponseEntity<ResponseWrapper<List<PostDto>>> allPostCreatedBy(int userId) {
        Optional<UserDo> existingUser = userRepository.findById(userId);
        if (!existingUser.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("User with given id doesn't exists", null),
                    HttpStatus.BAD_REQUEST);
        }
        List<PostDo> postDoList = postRepository.findByUserId(userId);
        if (postDoList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("This user has NOT created any posts", null),
                    HttpStatus.NOT_FOUND);
        }
        List<PostDto> postDtoList = ObjectMapperUtils.mapAllPostDoToDto(postDoList);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", postDtoList));
    }
}
