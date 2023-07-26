import React from "react";
import '../App.css'
import Header from "../components/Header";
import NameCard from "../components/NameCard";
import MainProfile from "../components/MainProfile";
import Stack from "../components/Stack";
import Form from "../components/Form";
import FooterSec from "../components/FooterSec";


function Home() {
  return (
    <>
    <Header/>
    <NameCard/>
    <MainProfile/>
    <Stack/>
    <Form/>
  
    </>

  )
}

export default Home