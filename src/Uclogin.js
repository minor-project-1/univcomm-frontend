import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';
import logo from './logo-transparent.png';
import {useNavigate} from 'react-router-dom';


const paperStyle={ padding:"30px 20px", width:500, margin:"50px auto"}

  
function Uclogin() {
    const [email, setEmail]= useState("")
    const [pass, setPass]= useState("")
    const handleEmail=(e)=>{setEmail(e.target.value)}
    const handlePass=(e)=>{setPass(e.target.value)}
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://univcomm.herokuapp.com/api/v1/auth/login',{
            email: email,
            password: pass
        })
        .then(result=>{if(result.data.access_token){localStorage.setItem("token",result.data.access_token)
                   navigate('/main')}})
        .catch(error=>{alert(error.response.data.detail);return})
    }

    return (
        <div >
            <header>
                <AppBar position='fixed'>
                <Toolbar sx={{ backgroundColor: "white", color: "#5065A8" }}>
                <img src={logo} alt="UNIVCOMM" width="13%"/>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            </header>
            <div  style={paperStyle}>
                <Paper elevation={6}>
                    <Grid align='center' >
                    <h1 style={{padding:"20px 20px", backgroundColor: "white", color:"#5065A8"}}>LOGIN</h1>
                    </Grid>
                    <form onSubmit={handleSubmit} style={{padding:"20px 20px"}}>
                        <TextField required variant="standard" value={email} onChange={handleEmail} type="email" fullWidth label="Email"/>
                        <TextField required variant="standard" value={pass} onChange={handlePass} type="password" fullWidth label="Password"/>
                        <Button type="submit" variant="outlined" style={{margin:"20px 0px 0px 0px"}}>LOGIN</Button>
                    </form>
                </Paper>
            </div>
        </div>
    );
}

export default Uclogin;