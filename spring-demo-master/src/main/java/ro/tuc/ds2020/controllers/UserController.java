package ro.tuc.ds2020.controllers;


import org.springframework.hateoas.Link;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.services.UserService;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Controller
@CrossOrigin("*")
///
@RequestMapping("/api/user")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //rest api to get all users
    @GetMapping///
    public ResponseEntity<List<UserDTO>> getUser(){
        List<UserDTO> dtos =userService.findUsers();

        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<UUID> deleteDevice(@PathVariable("id") UUID deviceID) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.deleteById(deviceID));
    }

    ///rest api to insert user
    @PostMapping///
    public ResponseEntity<UUID> insertUser(@Valid @RequestBody UserDTO userDTO){
        UUID id = userService.insert(userDTO);
        return new ResponseEntity<>(id, HttpStatus.CREATED);
    }

    //rest api to get user by id
    @GetMapping(value = "/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable("id") UUID id){
        UserDTO dto = userService.findUserById(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    //rest api to update user by id
    @PutMapping("/{id}")
    public ResponseEntity<UUID> updateUser(@PathVariable("id") UUID id, @Valid @RequestBody UserDTO userDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.updateById(id, userDTO));
    }



}
