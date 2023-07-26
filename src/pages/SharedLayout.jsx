import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import FooterSec from '../components/FooterSec'

function SharedLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <FooterSec/>
    </>
  )
}

export default SharedLayout