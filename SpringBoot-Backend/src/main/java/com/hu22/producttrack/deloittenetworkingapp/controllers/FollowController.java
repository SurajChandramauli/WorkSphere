package com.hu22.producttrack.deloittenetworkingapp.controllers;

import java.util.List;

import com.hu22.producttrack.deloittenetworkingapp.dtos.FollowDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.services.FollowService;
import com.hu22.producttrack.deloittenetworkingapp.services.UserService;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class FollowController {
    @Autowired
    FollowService followService;

    @PostMapping("/createFollowConnection")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<FollowDto>> createFollowConnection(@RequestBody FollowDto followDto) {
        return followService.createFollowConnection(followDto);
    }

    @GetMapping("/getAllFollowers/{userId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<FollowDto>>> getAllFollowers(@PathVariable int userId) {

        return followService.getAllFollowers(userId);
    }

    @GetMapping("/getAllFollowing/{userId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<FollowDto>>> getAllFollowing(@PathVariable int userId) {

        return followService.getAllFollowing(userId);
    }

    @DeleteMapping("/unfollow/{empId}/{followedById}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Void>> unfollow(@PathVariable int empId,
                                                          @PathVariable int followedById) {

        return followService.unfollow(empId,followedById);
    }

}
