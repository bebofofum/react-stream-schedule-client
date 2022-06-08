import React, { Component } from 'react';
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class NavBar extends Component {

    handleToggleClick = (e) => {
        let nav = document.getElementById('nav-show');
        console.log("I have been clicked", nav)
        let setDivVis = nav;
        nav.className === 'nav-show' ? setDivVis = "nav-show--visible" : setDivVis = "nav-show"

        nav.className = setDivVis


    }


    
    render() {
        return (
            <ul className="menu">
                <button onClick={this.handleToggleClick} class="nav-toggle" aria-label="open navigation">
                    <span class="hamburger"></span>
                </button>
                <div id="nav-show" className="nav-show">
                    <div class="menu__list">
                        <li className="">
                            <NavLink 
                            className="menu__list--item"
                            to="/"
                            exact>Home          
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink 
                            className="menu__list--item"
                            to="/streams/new"
                            exact>Add Stream         
                            </NavLink>
                        </li>
                    </div>
                    <div class="menu__list">
                        <li>
                            <GoogleAuth />
                        </li>

                        <li className="">
                            <NavLink 
                            className="menu__list--item"
                            to="/signup"
                            exact>Sign Up          
                            </NavLink>
                        </li>

                        <li className="">
                            <NavLink 
                            className="menu__list--item"
                            to="/login"
                            exact>Login         
                            </NavLink>
                        </li>
                    </div>
                </div>

                
                
            </ul>
            
        )
    }
}

export default NavBar