import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'






function TimeConverter() {
  
  const [seconds, onSetseconds] = useState('')

  const setSeconds = (evt) => {

    onSetseconds(event.target.value)

  }

  const [message , setmessage] = useState('')



  const TimeConversion = () => {

  

  const hours = Math.floor(seconds/3600)
  let secondsOut = seconds - hours*3600 

  const minutes = Math.floor(secondsOut/60)
  secondsOut = secondsOut - minutes * 60

  setmessage(hours+' : '+minutes+' : '+secondsOut)

  


  }

  return (
    <>
      <h1>1 : TimeConverter</h1>
      <div className="ingreso">

        <input type="text" placeholder="seconds" value={seconds} onChange={(event) => setSeconds(event)} />

        <button onClick={()=>TimeConversion()}> seconds</button>
       
      </div>

      <p>{message}</p>
      
      
    </>
  )
}

export default TimeConverter
