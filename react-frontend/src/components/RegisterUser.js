import {Form,Button} from "react-bootstrap";
import UserService from '../services/UserService';
import { useEffect, useState } from "react";

const RegisterUser = () =>{


const [newUser,setNewUser] = useState({
    name:"",username:"",password:""
});

const onInputChange = (e) =>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
}

const {name,username,password} = newUser;

const [users,setUsers]=useState([]);
useEffect(() => {
    UserService.getUsers().then((res)=>{
       setUsers(
        res.data);
       console.log(res.data)

    }).catch((error)=>{
        console.log(error);
    });
  },[]);


const addUser = () => {
    UserService.addUser(newUser).then((res)=>{
        console.log(res.data);
    }).catch((error)=>{
        console.log(error);
    })

}



const handleSubmit = (e)=>{
    e.preventDefault();
    let user_exista_deja=0;
    
        for (const user of users){
            if (user.username===username)
            { 
            user_exista_deja=1;
            
            }
            
        
        }
    if (user_exista_deja===0) {addUser(name,username,password);
        alert("Registered! Go back to <a href="/">log in");}
    else {alert("Username already exists"); };
    
}


return(


    <div>


    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Name *"
            name="name"
            value={name}
            onChange={(e) =>onInputChange(e)}
            required
            />

        </Form.Group>
        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Username *"
            name="username"
            value={username}
            onChange={(e) =>onInputChange(e)}
            required
            />

        </Form.Group>
        <Form.Group>
            <Form.Control
            type="password"
            placeholder="Password *"
            name="password"
            value={password}
            onChange={(e) =>onInputChange(e)}
            required
            />

        </Form.Group>
      
        
        <Button variant="success" type="submit" block>
            Register
        </Button>
    </Form>

</div>


)


}
export default RegisterUser;