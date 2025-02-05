package com.hu22.producttrack.deloittenetworkingapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.hu22.producttrack.deloittenetworkingapp.beans.Project;
import com.hu22.producttrack.deloittenetworkingapp.beans.ProjectI;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.*;
import com.hu22.producttrack.deloittenetworkingapp.beans.Statistic;
import com.hu22.producttrack.deloittenetworkingapp.beans.StatisticI;
import com.hu22.producttrack.deloittenetworkingapp.repositories.CarPoolRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.PostRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.UserRepository;
import com.hu22.producttrack.deloittenetworkingapp.utils.ObjectMapperUtils;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PostRepository postRepository;

    @Autowired
    CarPoolRepository carPoolRepository;

    public ResponseEntity<ResponseWrapper<UserDto>> createUser(
            UserDto userDto) {
        Optional<UserDo> existingUserById = userRepository.findByDeloitteEmpId(userDto.getDeloitteEmpId());
        if (existingUserById.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Given Deloitte_Employee_ID already exists!", null),
                    HttpStatus.BAD_REQUEST);
        }
        Optional<UserDo> existingUserByEmail = userRepository.findByDeloitteEmail(userDto.getDeloitteEmail());
        if (existingUserByEmail.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Given Deloitte_Email already exists!", null),
                    HttpStatus.BAD_REQUEST);
        }
        UserDo userDo = ObjectMapperUtils.mapUserDtoToUser(userDto);
        userDo = userRepository.save(userDo);
        UserDto userDtoReturned = ObjectMapperUtils.mapUserDoToDto(userDo);
        return new ResponseEntity(new ResponseWrapper<>("Successfully Added in db", userDtoReturned),
                HttpStatus.CREATED);
    }

    public ResponseEntity<ResponseWrapper<UserDto>> userLogin(UserDto userDto) {
        Optional<UserDo> existingUser = userRepository.findByDeloitteEmail(userDto.getDeloitteEmail());
        if (!existingUser.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("User with given email is not present in system!", null),
                    HttpStatus.NOT_FOUND);
        }

        if((existingUser.get().getPassword()).equals(userDto.getPassword())){
            UserDto userDtoReturned =
                    ObjectMapperUtils.mapUserDoToDto(existingUser.get());
            return ResponseEntity.ok(new ResponseWrapper<>("successfully logged in", userDtoReturned));
        }

        return new ResponseEntity<>(
                new ResponseWrapper<>("Given password doesnot match", null),
                HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<ResponseWrapper<UserDto>> getUserById(int userId) {
        Optional<UserDo> existingUser = userRepository.findById(userId);
        if (!existingUser.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("User with given userId in url is not present in system!", null),
                    HttpStatus.NOT_FOUND);
        }
        UserDto userDtoReturned =
                ObjectMapperUtils.mapUserDoToDto(existingUser.get());
        return ResponseEntity.ok(new ResponseWrapper<>("Success", userDtoReturned));
    }

    public ResponseEntity<ResponseWrapper<List<UserDto>>> getAllUsers() {
//        List<UserDo> userList = userRepository.findAll();
        List<UserDo> userList = userRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
        if (userList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("No users found in the system!", null),
                    HttpStatus.NOT_FOUND);
        }
        List<UserDto> userDtoList = ObjectMapperUtils.mapAllUserDoToDto(userList);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", userDtoList));
    }


    public ResponseEntity<ResponseWrapper<UserDto>> updateUser(int userId,
                                                               UserDto userDto) {
        Optional<UserDo> existingUser = userRepository.findById(userId);
        if (!existingUser.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("User with userId " + userId + " (in url) is not present in system!", null),
                    HttpStatus.NOT_FOUND);
        }
        UserDo userDo = ObjectMapperUtils.mapUserDtoToUser(userDto);
        userDo.setUserId(userId);
        userDo = userRepository.save(userDo);
        UserDto userDtoReturned = ObjectMapperUtils.mapUserDoToDto(userDo);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", userDtoReturned));
    }

    public ResponseEntity<ResponseWrapper<Void>> deleteUser(int userId) {
        Optional<UserDo> existingUser = userRepository.findById(userId);
        if (!existingUser.isPresent()) {
            return new ResponseEntity(
                    new ResponseWrapper<>("User with given userId is not present in system!", null),
                    HttpStatus.NOT_FOUND);
        }
        userRepository.deleteById(userId);
        return ResponseEntity.ok(new ResponseWrapper<>("User successfully deleted", null));
    }

    public List<Statistic> fetchSkillStatistics(){
        List<StatisticI> list = userRepository.getSkillStatistics();
        List<Statistic> statisticList = new ArrayList<>();

        list.forEach(e->{
            Statistic statistic = new Statistic();
            statistic.setPrimary_skill(e.getPrimary_skill());
            statistic.setCnt(e.getCnt());
            statisticList.add(statistic);
        });
        return statisticList;
    }

    public List<Project> fetchOnProjectStatistics(){
        List<ProjectI> list = userRepository.getOnProjectStatistics();
        List<Project> projectList = new ArrayList<>();

        list.forEach(e->{
            Project project = new Project();
            project.setOn_project(e.getOn_project());
            project.setCnt(e.getCnt());
            projectList.add(project);
        });
        return projectList;
    }

    public List<Statistic> fetchOnProjectSkillStatistics(){
        List<StatisticI> list = userRepository.getOnProjectSkillStatistics();
        List<Statistic> statisticList = new ArrayList<>();

        list.forEach(e->{
            Statistic statistic = new Statistic();
            statistic.setPrimary_skill(e.getPrimary_skill());
            statistic.setCnt(e.getCnt());
            statisticList.add(statistic);
        });
        return statisticList;
    }

    public List<Statistic> fetchOffProjectSkillStatistics(){
        List<StatisticI> list = userRepository.getOffProjectSkillStatistics();
        List<Statistic> statisticList = new ArrayList<>();

        list.forEach(e->{
            Statistic statistic = new Statistic();
            statistic.setPrimary_skill(e.getPrimary_skill());
            statistic.setCnt(e.getCnt());
            statisticList.add(statistic);
        });
        return statisticList;
    }

    public ResponseEntity<ResponseWrapper<Long>> getUserPoints(int userId){
        long points = 0;

        Optional<UserDo> existingUser = userRepository.findById(userId);
        if (!existingUser.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("User with given id doesn't exists", null),
                    HttpStatus.BAD_REQUEST);
        }

        List<PostDo> postDoList = postRepository.findByUserId(userId);
        if (!postDoList.isEmpty()) {
            points+=5*postDoList.size();

            for (PostDo post : postDoList) {
                if(post.getVote()!=null)
                {
                    points+=post.getVote();
                }
                if (post.getDVote()!=null){
                    points-=post.getDVote();
                }
                if (!post.getComments().isEmpty()){
                    points+=2*post.getComments().size();
                }
                System.out.println(post);
            }

        }

        Optional<CarPoolDo> existingCarPoolUser = carPoolRepository.findByDeloitteEmail(existingUser.get().getDeloitteEmail());
        if (existingCarPoolUser.isPresent()) {
            points+=7;
        }

        return ResponseEntity.ok(new ResponseWrapper<>("Success", points));
    }

}
