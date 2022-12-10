import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Header() {

  return (
    <>
    <h2>My name is Erika</h2>
    <h3>My hobbies</h3>
    <ul>
      <MyHobbies name = "Read books"/>
      <MyHobbies name = "Judo"/>
      <MyHobbies name = "Dance"/>
      </ul>
    </>
  )
}

function App() {

  return (
    <>
    <h1>dz1</h1>
<div className='AboutMe'>
  <Header/> 
</div>
</>
  )
}


function MyHobbies(props) {
  return (
<li>{props.name}</li>
  )
}



export default App
