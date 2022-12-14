import React, {Component, useEffect, useState} from 'react'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart';
import './App.css'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from './components/Stats';
import Sidebar from './components/Sidebar';
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home";
import QuizGrade from "./Pages/QuizGrade";
import CoursesCategories from "./Pages/CoursesCategories";
import Attendance from "./Pages/Attendance";
import OverallGrades from "./Pages/OverallGrades";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/getGrades").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  const location = useLocation();
  return (
    <>
      {/* <Navbar /> */}
      {/* <Stats/> */}
      <Sidebar/>
      {/* <div className='center'>
        <div className='line-chart'><LineChart/></div>
        <div className='pie-chart'><PieChart/></div>
        <div className='bar-chart'><BarChart/></div>
        <div className='scatter-chart'><ScatterChart/></div>
      </div> */}
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home/>} />
            <Route path="/QuizGrade" element={<QuizGrade/>} />
            <Route path="/CoursesCategories" element={<CoursesCategories/>} />
            <Route path="/Attendance" element={<Attendance/>} />
            <Route path="/OverallGrades" element={<OverallGrades/>} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
    );
}
  
export default App;