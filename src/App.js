import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [question,setQuestion]=useState('');

  const [response,setResponse]=useState('');


  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(question);
    axios.post('https://gemini-app-omega.vercel.app/getResponse',{
      question:question
    })
    .then(res=>{
      console.log(res.data.response);
      setResponse(res.data.response);
      
    })
    .catch(err=>{
      console.log(err);
      
    })
  }

  const speakHandler=()=>{
    const utterance = new SpeechSynthesisUtterance(response);
    window.speechSynthesis.speak(utterance);
    
  }

  return (
    <div className="App">
    <div className='box'>
      <div className='profile-pic'>

        <img className='pic' alt='ProfilePic' src={require('../src/assets/user.png')}/>
      </div>
      <p className='label'>Anil</p>

      <textarea onChange={(e)=>{setQuestion(e.target.value)}}/>
      <button onClick={submitHandler}>Send</button>
    </div>

    <div className='box'>
    <div className='profile-pic'>
        <img className='pic' alt='ProfilePic' src={require('../src/assets/g.webp')}/>
      </div>

      <p className='label'>Gemini</p>
      <textarea value={response}/>
      <button onClick={speakHandler}>Speak</button>

    </div>
    </div>
  );
}

export default App;
