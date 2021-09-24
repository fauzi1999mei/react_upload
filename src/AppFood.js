
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchFood from './SearchFood';



const {useState} = React;


function AppFood() {

  const [counter,setCounter]= useState(0);

  return (
    <>
    
    <SearchFood />




    </>
    
    
   
   
  );
}
export default AppFood;
