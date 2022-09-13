
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from './logo-transparent.png';
import Welcome from './Welcome';



function App() {
  
  const navigate=useNavigate();
  return (
    
    <div className="App">
      <header className="App-header">
        <AppBar >
          <Toolbar sx={{backgroundColor: "white",color:"#5065A8"}}>
            <img src={logo} alt="UNIVCOMM" width="13%"/>
            <p style={{flexGrow:1}}/>
            <Button onClick={(e)=>navigate('/login')}>Login</Button>
            <Button onClick={(e)=>navigate('/register')}>Register</Button>
            </Toolbar>
            </AppBar>
            <Toolbar/>   
      </header>

         <Welcome/> 
        

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
