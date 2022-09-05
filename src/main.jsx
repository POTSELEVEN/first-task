import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TimeConverter from './TimeConverter.jsx'
import CallCost from './CallCost'
import TimeGreeting from './TimeGreeting'
import CompareNumbers from './CompareNumbers'
import OddLessThan from './OddLessThan'
import IncreaseSalarie from './IncreaseSalarie'
import NMtable from './NMtable'
import DivideList from './DivideList'
import NMadittion from './NMadittion'
import StudentNotes from './StudentNotes'
import StudentsNotes from './StudentsNotes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimeConverter />
    <CallCost />
    <TimeGreeting />
    <CompareNumbers />
    <OddLessThan />
    <IncreaseSalarie />
    <DivideList />
    <NMtable />    
    <NMadittion />
    <StudentNotes />
    <StudentsNotes />
  </React.StrictMode>
)
