package ro.tuc.ds2020.mappers;

import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.entities.User;

public class UserMapper {

    public static UserDTO entityToDTO(User source){
        if (source==null) return null;

        return UserDTO.builder()
                .id_user(source.getUser_id())
                .password(source.getPassword())
                .username(source.getUsername())
                .name(source.getName())
                .role(source.getRole())
                .build();
    }


    public static User toEntity(UserDTO source){
        return User.builder()
                .username(source.getUsername())
                .name(source.getName())
                .password(source.getPassword())
                .role(source.getRole())
                .build();
    }
}
