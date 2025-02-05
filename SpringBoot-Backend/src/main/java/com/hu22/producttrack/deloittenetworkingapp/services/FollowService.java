package com.hu22.producttrack.deloittenetworkingapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.hu22.producttrack.deloittenetworkingapp.dtos.FollowDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.FollowDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.FollowIdentityDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
import com.hu22.producttrack.deloittenetworkingapp.repositories.FollowRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.UserRepository;
import com.hu22.producttrack.deloittenetworkingapp.utils.ObjectMapperUtils;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
public class FollowService {

    @Autowired
    FollowRepository followRepository;

    @Autowired
    UserRepository userRepository;

    public ResponseEntity<ResponseWrapper<FollowDto>> createFollowConnection (
            FollowDto followDto){
        if(followDto.getEmpId()==followDto.getFollowedById()){
            return new ResponseEntity<>(
                    new ResponseWrapper<>("The follower and following user are same", null),
                    HttpStatus.BAD_REQUEST);
        }


        Optional<UserDo> existingEmp=userRepository.findById(followDto.getEmpId());
        Optional<UserDo> existingFollowedBy = userRepository.findById(followDto.getFollowedById());

        if(!existingEmp.isPresent() || !existingFollowedBy.isPresent()){
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Thw given users are not present in the user db ", null),
                    HttpStatus.BAD_REQUEST);
        }

        FollowIdentityDo compositeKey=new FollowIdentityDo(followDto.getEmpId(),followDto.getFollowedById());
        Optional<FollowDo> existingConnection = followRepository.findById(compositeKey);
        if (existingConnection.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("This connection already exists in db", null),
                    HttpStatus.BAD_REQUEST);
        }

        FollowDo followDo= ObjectMapperUtils.mapFollowDtoToDo(followDto);
        followDo=followRepository.save(followDo);
        return new ResponseEntity(new ResponseWrapper<>("Successfully added in db",followDto),
                HttpStatus.CREATED);
    }

    public ResponseEntity<ResponseWrapper<List<FollowDto>>> getAllFollowers(int userId) {
        List<FollowDo> followersList = followRepository.findAllFollowers(userId);

        if(followersList.isEmpty()){
            return ResponseEntity.ok(new ResponseWrapper<>("This employee has no followers", null));
        }

        List<FollowDto>followDtoList=ObjectMapperUtils.mapAllFollowDoToDto(followersList);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", followDtoList));
    }
    public ResponseEntity<ResponseWrapper<List<FollowDto>>> getAllFollowing(int userId) {
        List<FollowDo> followingList = followRepository.findAllFollowing(userId);

        if(followingList.isEmpty()){
            return ResponseEntity.ok(new ResponseWrapper<>("This employee has no followings", null));
        }

        List<FollowDto>followDtoList=ObjectMapperUtils.mapAllFollowDoToDto(followingList);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", followDtoList));
    }
    public ResponseEntity<ResponseWrapper<Void>> unfollow(int empId,int followedById) {

        FollowIdentityDo compositeKey=new FollowIdentityDo(empId,followedById);
        Optional<FollowDo> existingConnection = followRepository.findById(compositeKey);

        if (!existingConnection.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("This connection is not present in db", null),
                    HttpStatus.BAD_REQUEST);
        }
        followRepository.deleteById(compositeKey);
        return ResponseEntity.ok(new ResponseWrapper<>("Successfully unfollowed user", null));
    }

}
