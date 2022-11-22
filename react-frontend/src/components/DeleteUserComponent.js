import {Form,Button} from "react-bootstrap";
import UserService from '../services/UserService';
import { useEffect, useState } from "react";

const DeleteUserComponent = () =>{

    


const [users,setUsers]=useState([]);
const [selectedUser,setSelectedUser]=useState(null);

useEffect(() => {
    UserService.getUsers().then((res)=>{
       setUsers(
        res.data);
       console.log(res.data)

    }).catch((error)=>{
        console.log(error);
    });
  },[]);

  

  

const deleteUser = (selectedUser) => {

        UserService.deleteUser(selectedUser).then((res)=>{
         
  console.log(res.data);
    }).catch((error)=>{
        console.log(error);
    })

}



const handleSubmit = (e)=>{
    e.preventDefault();
    deleteUser(selectedUser);      
}


const handleSelect = (e) =>{
    setSelectedUser(e.target.value==="none"? null: e.target.value);
    console.log(e.target.value);
    
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

    <Form.Control 
    as ="select" 
    onChange={(e) =>handleSelect(e)}
    >
    <option value="none">none</option>
      {users.map((user) => {
      return ( <option value={user.id_user}>{user.username}</option>);
      }
      )}

    </Form.Control>
        
        <Button variant="success" type="submit" block>
            Delete User
        </Button>
    </Form>

</div>


)


}
export default DeleteUserComponent;