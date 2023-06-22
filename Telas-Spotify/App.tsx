import React from "react";
import { StatusBar } from "expo-status-bar";
import { Login } from "./src/screens/Login";
import GetStarted from "./src/screens/GetStarted";
import { Entrada } from "./src/screens/Entrada";


export default function App(){
  return(
    <>
       <Entrada />
    <StatusBar style='light'/>
    </>

  )
}