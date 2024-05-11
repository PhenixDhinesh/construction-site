import React,{useState} from 'react'

function Try() {
const name = "gayathri"
const[age,setAge]=useState(0)
const myAge =()=>{
    setAge(age + 1)
}
  return (
    <div>
        <input type="text" />
      <h1 >My Nmae is{age} </h1>
 <button onClick={myAge}>age</button>
    </div>
  )
}

export default Try
