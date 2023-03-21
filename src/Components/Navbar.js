import React from 'react';
import { Component } from 'react';
import './Navbar.css';
 class Navbar extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <a href="#" className='Nav-btn'>Home</a>
                <a href="#" className='Nav-btn'>About Us</a>
                <a href="#" className='Nav-btn'>Photos</a>
                <a href="#" className='Nav-btn'>Login</a>
            </nav>
        );
    }
 };
 export default Navbar;