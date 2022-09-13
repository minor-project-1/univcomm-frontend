import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import axios from 'axios';
import logo from './logo-transparent.png';
import {useNavigate} from 'react-router-dom';


const paperStyle={ padding:"30px 20px", width:500, margin:"50px auto"}

  
function Ucreg() {
    const [category, setCategory]= useState("")
    const [fname, setFname]= useState("")
    const [lname, setLname]= useState("")
    const [email, setEmail]= useState("")
    const [pass, setPass]= useState("")
    const [conpass, setConpass]= useState("")
    const [rollno, setRollno]= useState("")
    const handleCat=(e)=>{setCategory(e.target.value)}
    const handleFname=(e)=>{setFname(e.target.value)}
    const handleLname=(e)=>{setLname(e.target.value)}
    const handleEmail=(e)=>{setEmail(e.target.value)}
    const handlePass=(e)=>{setPass(e.target.value)}
    const handleConpass=(e)=>{setConpass(e.target.value)}
    const handleRollno=(e)=>{setRollno(e.target.value)}
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://univcomm.herokuapp.com/api/v1/auth/register',{
            user_type: category,
            first_name: fname,
            last_name: lname,
            email: email,
            password: pass,
            confirm_password: conpass,
            roll_no: rollno
        })
        .then(()=>navigate('/regsuccess'))
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
                    <h1 style={{padding:"20px 20px", backgroundColor: "white",color:"#5065A8"}}>REGISTER</h1>
                    </Grid>
                    <form onSubmit={handleSubmit} style={{padding:"20px 20px"}}>
                     <FormControl>
                      <FormLabel >Role in the university</FormLabel>
                       <RadioGroup
                          value={category}
                          onChange={handleCat}
                          required
                        >
                          <FormControlLabel value='0' control={<Radio />} label="Student" />
                          <FormControlLabel value='1' control={<Radio />} label="Faculty" />
                           <FormControlLabel value='2' control={<Radio />} label="Alumni" />
                        </RadioGroup>
                     </FormControl>
                        <TextField required variant="standard" value={fname} onChange={handleFname} fullWidth label="First Name"/>
                        <TextField required variant="standard" value={lname} onChange={handleLname} fullWidth label="Last Name"/>
                        <TextField required variant="standard" value={email} onChange={handleEmail} type="email" fullWidth label="Email"/>
                        <TextField required variant="standard" value={pass} onChange={handlePass} type="password" fullWidth label="Password"/>
                        <TextField required variant="standard" value={conpass} onChange={handleConpass} type="password" fullWidth label="Confirm Password"/>
                        <TextField required variant="standard" value={rollno} onChange={handleRollno} fullWidth label="Rollno/Faculty.ID/Alumni.ID"/>
                        <Button type="submit" variant="outlined" style={{margin:"20px 0px 0px 0px"}}>SUBMIT</Button>
                    </form>
                </Paper>
            </div>
        </div>
    );
}

export default Ucreg;