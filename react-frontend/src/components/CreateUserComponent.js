import {Form,Button} from "react-bootstrap";
import UserService from '../services/UserService';
import { useEffect, useState } from "react";

const CreateUserComponent = () =>{


const [newUser,setNewUser] = useState({
    name:"",username:"",password:"",role:""
});

const onInputChange = (e) =>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
}

const {name,username,password,role} = newUser;

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
    if (user_exista_deja===0) 
    addUser(name,username,password,role);
    else {alert("Username already exists"); };
    
}

return(


    <div>
<div>

<nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
                <a href=" users" className="navbar-brand">Users</a>
                <a href=" devices" className="navbar-brand">Devices</a>
                <a href=" create-user" className="navbar-brand">Create User</a>
                <a href=" delete-user" className="navbar-brand">Delete User</a>
                <a href=" create-device" className="navbar-brand">Create Device</a>
                <a href=" delete-device" className="navbar-brand">Delete Device</a>
                <a href=" update-user" className="navbar-brand">Update User</a>
                <a href=" update-device" className="navbar-brand">Update Device</a>

            </div>
        </nav>
</div>

    <div>
    <h2 className="text-center">Users list</h2>
          

          <div className="row">
              <table className="table table-striped table-bordered">

              <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            
                            <th>Role</th>
                            

                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map(
                                user =>
                                <tr key={user.user_id}>
                                    <td> {user.user_id}</td>
                                    <td> {user.name}</td>
                                    <td> {user.username}</td>
                                   
                                    <td> {user.role}</td>
                                    

                                </tr>
                            )
                        }
                    </tbody>


              </table>
          </div>
    </div>


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
            type="text"
            placeholder="Password *"
            name="password"
            value={password}
            onChange={(e) =>onInputChange(e)}
            required
            />

        </Form.Group>
        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Role *"
            name="role"
            value={role}
            onChange={(e) =>onInputChange(e)}
            required
            />

        </Form.Group>
        
        <Button variant="success" type="submit" block>
            Add New User
        </Button>
    </Form>

</div>


)


}
export default CreateUserComponent;