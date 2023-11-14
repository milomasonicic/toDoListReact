import logo from './logo.svg';
//import './App.css';
//import {useState, useEffect} from 'react'
import { Component } from 'react';
import { useState, useEffect } from 'react';
/*
Title: 'Lifecycle Methods: Image Loader' Objective: 
To put into practice what you've learned about lifecycle methods.
Instructions:
Create a new React component that loads and displays an image from a URL stored in its state.
Use the componentDidMount method to fetch the image.
Add a button that updates the URL in the state and triggers a re-render.
Use the componentDidUpdate method to fetch the new image when the state changes.
Use the componentWillUnmount method to cancel the image fetch if the component is unmounted before the image loads.


*/

function Loader(){

  const [imageUrl, setImageUrl]= useState('https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg')
  const [newUrl, setNewUrl] = useState('')
  const [PrevUrl, setPrevUrl] = useState(imageUrl)
  

  function newUrlChange(e){

    setNewUrl(e.target.value)
  }

  
  function changeImg(){

    setPrevUrl(imageUrl)
    setImageUrl(newUrl)
    setNewUrl('')
  }


  useEffect(()=>{
    console.log("comp mounted")
  },[])

  //upd
  useEffect(()=>{
   if(imageUrl !== PrevUrl){
    console.log("image changed")
   }
  },[imageUrl, PrevUrl ])

  // componentWillUnmount???

  return(

    <div>
       <div>
        <input placeholder='new url' 
        value={newUrl}
        onChange={newUrlChange}></input>
        <button onClick={changeImg}>
        Change image
        </button>
      </div>
      <div>
        <img src={imageUrl} style={{width: '400px'}}></img>
      </div>

    </div>

  )
}

function App(){

  return(
    <div>
      <Loader/>
    </div>
  )
}

export default App


