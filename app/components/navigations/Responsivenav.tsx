"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import Mobilenav from './Mobilenav'

const Responsivenav = () => {

  const [showNav , setShowNav]= useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav = {showNavHandler}/> 
      <Mobilenav nav = {showNav} closeNav = {closeNavHandler}/>
    </div>
  )
}

export default Responsivenav
