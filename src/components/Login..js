import { useState } from "react";
import axios from "axios";
const Login = () =>{

    var [login,setLogin] = useState({email:"",password:""});
    const [isLoggedIn,setLoggedIn] = useState(false);
    const handleLogin = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5354/login",{
            email:login.email,
            password:login.password
        },{
            headers:{
                'Content-Type':"application/json"
            }
        }).then(
            result => {
                setLoggedIn(true);
                localStorage.setItem("isLoggedIn",true);
                localStorage.setItem("token",result.data.token);
                console.log(result);
            }
        ).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
        {
            localStorage.getItem("token")==null ? 
            (
        <form onSubmit={handleLogin} >
            <input type="email" name="login"
            value={login.email}
            onChange={(e)=>{setLogin({...login,email:e.target.value})}}
            ></input>
            <input type="password" name="password"
            value={login.password}
            onChange={(e)=>{ 
                setLogin({
                    ...login,
                    password:e.target.value
                })
            }}
            ></input>
            <input type="submit" name="submit" value="Login"></input>
        </form>
        // <form>
        //     <input type="email"></input>
        //     <input type="password"></input>
        //     <input type="text"></input>
        //     <input type="submit" name="submit" value="Sign in"></input>
        // </form>
        
        ) 
        : <p>already loggedIn</p>
        }
        </>
    )
}

export default Login;