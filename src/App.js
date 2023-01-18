import { BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";
import GlobalStyled from "./components/GlobalStyled";
import Login from "./components/Login";
import Registration from "./components/Registration"
import Home from "./components/Home";
import Entry from "./components/Entry";
import Exit from "./components/Exit";


function App() {

  return (

    <BrowserRouter>
      <GlobalStyled/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Registration/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/nova-entrada" element={<Entry/>}/>
          <Route path="/nova-saida" element={<Exit/>}/>

        </Routes>


    </BrowserRouter>
  );
}

export default App;
