import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/user";


class UserService{
    getUsers(){
        return axios.get(USER_API_BASE_URL);

    }

    addUser(user){
        console.log("added",user);
        return axios.post(USER_API_BASE_URL,user);
    }


    updateUser(id,user){
        console.log("update",user);
        return axios.put(USER_API_BASE_URL+"/"+id,user);
    }

    deleteUser(id){
        console.log("del user",id);
        return axios.delete(USER_API_BASE_URL+"/"+id);
    }
}


export default new UserService()