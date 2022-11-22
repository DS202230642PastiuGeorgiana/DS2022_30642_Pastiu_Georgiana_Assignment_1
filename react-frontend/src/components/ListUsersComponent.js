import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
const ListUsersComponent =()=>{
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
      return (
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
    );
}
export default ListUsersComponent;