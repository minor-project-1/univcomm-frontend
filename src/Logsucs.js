import { Button } from '@mui/material'
import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import logo from './logo-transparent.png'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import IconButton from '@mui/material/IconButton'
import CardActions from '@mui/material/CardActions'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Divider from '@mui/material/Divider'

function Logsucs() {
    const navigate=useNavigate();
    const [query, setQuery]= useState(null)
    const [thread, setThread]= useState(null)
    
    useEffect(()=>{
      Getquery();
      Getthread();
    },[])
    function Logout(){
        localStorage.removeItem("token")
        navigate('/')

    }

    function Getquery(){
      axios.get('https://univcomm.herokuapp.com/api/v1/user/queries',{
            headers:{token:localStorage.getItem("token")}
        })
        .then(result=>{console.log(result)
            if(result.data){setQuery(result.data.questions)}})
        .catch(error=>{alert(error.response.data.detail);navigate('/login')})
    }

    function Getthread(){
      axios.get('https://univcomm.herokuapp.com/api/v1/user/threads',{
        headers:{token:localStorage.getItem("token")}
    })
    .then(result=>{console.log(result)
        if(result.data){setThread(result.data.posts)}})
    .catch(error=>{alert(error.response.data.detail);
               navigate('/login')})
    }
    return (
        <div><AppBar position='fixed'>
                <Toolbar sx={{ backgroundColor: "white", color: "#5065A8" }}>
                <img src={logo} alt="UNIVCOMM" width="13%"/>
                <p style={{flexGrow:1}}/>
               <Button onClick={Logout}>LOGOUT</Button>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Grid container spacing={2} direction="row" sx={{height:"100vh"}}>
            <Grid item md={2}>
            <List sx={{color:"#5065A8"}}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="My Profile"/>
                  </ListItemButton>
                  </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link style={{color:'#5065A8', textDecoration:'none', fontFamily:'Arial'}} to="/query">Ask</Link>
                </ListItemButton>
                </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link style={{color:'#5065A8', textDecoration:'none', fontFamily:'Arial'}}to="/post">Post</Link>
                </ListItemButton>
                </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Notifications"/>
                </ListItemButton>
                </ListItem>
            </List>
          </Grid>
          
          <Grid item md={4.9} sx={{backgroundColor:"whitesmoke"}}>
          <h2 style={{fontFamily:"Arial", color:"#5065A8"}}>QUERIES</h2>
            {query&&query.map((question)=>
           <> <Card sx={{ width:"95%" }}>
            <CardHeader
              
              title={question.question}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
               {question.user.first_name+" "+question.user.last_name}
               <br/>
               {question.user.roll_no}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
            
          </Card>
          <Divider/>
          </>
          )}
          
          </Grid>
          <Grid item md={0.2}></Grid>
          <Grid item md={4.9} sx={{backgroundColor:"whitesmoke"}}>
            <h2 style={{fontFamily:"Arial", color:"#5065A8"}}>THREADS</h2>
            {thread&&thread.map((post)=>
            <><Card sx={{ width:"95%" }}>
            <CardHeader
              
              title={post.title}
              subheader={post.user.first_name+" "+post.user.last_name+" "+post.user.roll_no}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
               
               {post.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <ThumbUpIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Divider/>
          </>
          )}
          </Grid>
          </Grid>
        </div>
    )
}

export default Logsucs