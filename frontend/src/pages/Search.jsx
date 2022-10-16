import React from 'react'
import TextField from '@mui/material/TextField';
import { shadows } from '@mui/system';
import {useState } from "react";
import ShowDetails from "../components/ShowDetails";
import './styles.css';
import axios from 'axios'

const Search = () => {

  const [inputText, setInputText] = useState("");
  let inputHandler = async (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);


   const config = {
      headers: {
        token: localStorage.getItem('token')
      },
    }
    const response = await axios.get(`http://13.127.208.70:8000/api/search?show=${inputText}`, config)
    console.log(response.data)
  };
  return (
    <div>
      <h1 className='title'>Search Shows</h1>
        <div className='searchbox'>
          <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          display = "flex"
          label="Shows"/>
        </div>
        
      <div className='cardalingment'>
        <ShowDetails input={inputText}/>
      </div>
    </div>
  )
}

export default Search