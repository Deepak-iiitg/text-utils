import React from 'react';
import {useState} from 'react';
import copy from "copy-to-clipboard";
import './style.css';
function Text(){
    const [inp,setInput] = useState('enter something in the above text area');
    const [time,setTime] = useState(0);  
    const [word,setWord] = useState(7);
    const [count,setCount] = useState(31);
    
    
    const handleInput=(e)=>{
        let start = performance.now();
         let text = e.target.value;
         var regex = /[a-zA-Z0-9]/g; 
         let c = text.match(regex).length;
         let arr = text.split(' ');
         let len = 0;
         for(var i =0;i<arr.length;i++){
             if(arr[i].length > 0){
                 len++;
             }
         } 
         setInput(text);
         setWord(len);
         setCount(c);
         let end = performance.now();
         setTime((end-start).toFixed(4));

    }
    const removeText=()=>{
        let start = performance.now();
        setInput('');
        setCount(0);
        setWord(0);
        let end = performance.now();
        setTime((end-start).toFixed(4));
    }
    const lower=()=>{
        let start = performance.now();
        setInput(inp.toLowerCase());
        let end = performance.end();
        setTime((end-start).toFixed(4));
        
    }
    const upper=()=>{
        let start = performance.now();
        setInput(inp.toUpperCase());
        let end = performance.now();
        setTime((end-start).toFixed(4));
    }
    const remove=()=>{
        let start = performance.now();
        let text = "";
        for(var i=0;i<inp.length;i++){
            if(inp[i] !== ' '){
                text = text+inp[i];
            }
        }
        setInput(text);
        if(text === ''){
            setWord(0);
        }else{
            setWord(1);
        }
        let end = performance.now();
        setTime((end-start).toFixed(4));
    }
    const copyText=()=>{
        
        if(inp === ''){
            return;
        }
       copy(inp);
       alert('copied ..');
    }
    return(
      <div className='container'>
        
        <h1>Enter the text analyze below</h1>
        <textarea value={inp} onChange={handleInput}></textarea>
        <button onClick={()=>{upper()}}>Convert to Uppercase</button>
        <button onClick={()=>{lower()}}>Convert to Lowercase</button>
        <button onClick={()=>{removeText()}}>Clear Text</button>
        <button onClick={copyText}>Copy Text</button>
        <button onClick={remove}>Remove Extra Spaces</button>
        <h1>Your Text Summary</h1>
        <p>{word} words and {count} characters</p>
        <p>{time} Minutes read</p>
        <p></p>
        <h1>Preview</h1>
        <p>{inp}</p>
      </div>
    );

}
export default Text;