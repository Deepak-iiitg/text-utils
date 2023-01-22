import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Text from './components/ProjectUtils';
function App() {
  const [theme,setTheme] = useState('white');
  const [nav,setNav] = useState('white');
  const [inbox,setInbox] = useState('white');
  const changeTheme=()=>{
    console.log('run');
       if(theme === 'white'){
          setTheme('dark');
       }else{
        setTheme('white');
       }
       if(nav === 'white'){
          setNav('gray');
       }else{
        setNav('white');
       }
       if(inbox === 'white'){
        setInbox('gray');
       }else{
        setInbox('white');
       }
  }
  
  return (
    <div className={theme}>
         <Navbar nav={nav} theme={changeTheme} />
         <Text />
    </div>
  );
}

export default App;
