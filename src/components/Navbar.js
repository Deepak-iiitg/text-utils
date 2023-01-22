import React,{useState} from 'react';
import {FormGroup,FormControlLabel,Switch} from '@mui/material'; 
import './style.css';
function Navbar({nav,theme}){
    const [checked,setChecked] = useState(false);
    const handleChange=()=>{
      theme();
       if(checked){
        setChecked(false);
       }else{
        setChecked(true);
       }
    }
    return (
       <div class={nav}>
          <div class='left-nav'>
            <ul>
                <li>TestUtil</li>
                <li>Home</li>
            </ul>
            
          </div>
          <div className='right-nav'>
             <FormGroup className='right-nav'>
               <FormControlLabel control={<Switch checked={checked} />} defaultSize="median" label="Enable DarkMode" onChange={handleChange}/>
             </FormGroup>
          </div>
       </div>
    );

}
export default Navbar;