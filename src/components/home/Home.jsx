import React from 'react';
import './home.css';
import BackgroundHome from '../../assets/img/BackgroundHome.png'
import Nav from '../nav/Nav';

const Home = () => {
  return (
    <>
    <Nav/>
    <img src={BackgroundHome}/>
    </>
  )
}

export default Home
