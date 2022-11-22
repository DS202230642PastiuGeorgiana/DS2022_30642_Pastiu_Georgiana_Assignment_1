package ro.tuc.ds2020.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.controllers.handlers.exceptions.model.ResourceNotFoundException;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.mappers.UserMapper;
import ro.tuc.ds2020.repositories.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;


    public UUID deleteById(UUID id) {
        userRepository.deleteById(id);
        return id;
    }
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> findUsers(){
        List<User> userList = userRepository.findAll();
        return userList.stream().map(UserMapper::entityToDTO).collect(Collectors.toList());
    }

    public UserDTO findUserById(UUID id){
        Optional<User> prosumer = userRepository.findById(id);
        if(!prosumer.isPresent()){
            throw new ResourceNotFoundException(User.class.getSimpleName());
        }
        return UserMapper.entityToDTO(prosumer.get());
    }

    public UUID insert(UserDTO userDTO){
        User user =  UserMapper.toEntity(userDTO);
        if (user.getRole()!= User.ROLE.ADMIN) user.setRole(User.ROLE.CLIENT);
        user = userRepository.save(user);
        return user.getUser_id();
    }

    public UUID updateById(UUID id, UserDTO userDTO) {
        User user = userRepository.findById(id).get();
        user.setUsername(userDTO.getUsername());
        user.setUsername(userDTO.getName()); ///!!!!
        user.setPassword(userDTO.getPassword());
        user.setRole(userDTO.getRole());
        return userRepository.save(user).getUser_id();
    }

    /*public List<UserDTO> getConsumers() {
        List<User> consumers = userRepository.findAll();
        return consumers.stream().map(UserMapper::entityToDTO).toList();
    }*/
}
