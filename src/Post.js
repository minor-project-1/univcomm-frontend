import React from 'react'
import {Link} from 'react-router-dom'
import AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import logo from './logo-transparent.png'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const paperStyle={ padding:"30px 20px", width:500, margin:"50px auto"}

function Post() {
    const navigate=useNavigate();
    const [title, setTitle]= useState("")
    const [content, setContent]= useState("")
    const handleTitle=(e)=>{setTitle(e.target.value)}
    const handleContent=(e)=>{setContent(e.target.value)}
    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://univcomm.herokuapp.com/api/v1/user/post',{
            title: title,
            content: content
        },{
            headers:{token:localStorage.getItem("token")}
        })
        .then(result=>{console.log(result)
            if(result.data){navigate('/main')}})
        .catch(error=>{alert(error.response.data.detail);return})}

    return (
        <div>
            <header><AppBar position='fixed'>
             <Toolbar sx={{ backgroundColor: "white", color:"#5065A8" }}>
                 <img src={logo} alt="UNIVCOMM" width="13%"/>
                <p style={{flexGrow:1}}/>
                 <Link to="/main">GO BACK</Link>
              </Toolbar>
             </AppBar>
            <Toolbar/>
             </header>
        <div  style={paperStyle}>
                <Paper elevation={6}>
                    <Grid align='center' >
                    <h3 style={{padding:"20px 20px", backgroundColor: "white", color:"#5065A8"}}>Please input your post</h3>
                    </Grid>
                    <form onSubmit={handleSubmit} style={{padding:"20px 20px"}}>
                        <TextField required variant="filled" value={title} onChange={handleTitle} type="text" fullWidth label="Title"/>
                        
                        <TextField required variant="filled" value={content} onChange={handleContent} type="text" multiline fullWidth label="Content"/>
                        <Button type="submit" variant="outlined" style={{margin:"20px 0px 0px 0px"}}>POST</Button>
                    </form>
                </Paper>
            </div>
    </div>
        
    )
}

export default Post