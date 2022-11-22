import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import UserService from "./services/UserService";

export default function Login() {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const [users,setUsers]=useState([]);

    

    function handleSubmit(event) {
        event.preventDefault();
    }

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
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>
                
                <Button block size="lg" type="submit" onClick={() =>
                    {
                        let parola_gresita=0, user_inexistent=1;
                        for (const user of users) {
                            
                            if(user.username === username){
                                user_inexistent=0;
                            if( user.password === password){
                                if(user.role==="ADMIN")
                                {   window.close();
                                    window.open("/admin");}
                                else
                                {   window.close();
                                    window.open("/client");}
                            }
                            else{ parola_gresita=1;
                                
                            }
                            }
                            
                            

                        }

                        if (user_inexistent === 1) 
                        {
                            alert("User not found. Please try again.");
                            
                        }
                        else{if (parola_gresita === 1){
                            alert("Wrong password. Please try again.");
                        }}
                            

                        
                    }
                }>
                    Login
                </Button>
                
                
            </Form>

            <Button size="lg"  onClick={() =>
                    {
                        window.open("/register");
                        window.close();
                    }
                }
                >
                    Sign Up
                </Button>
        </div>
    );
}