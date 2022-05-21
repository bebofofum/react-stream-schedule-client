import React, { Component } from 'react';
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class NavBar extends Component {


    
    render() {
        return (
            <ul className="menu-flex">
                <div class="menu-flex__list">
                    <li className="-mb-px mr-1">
                        <NavLink 
                        className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                        to="/"
                        exact>Home          
                        </NavLink>
                    </li>
                    <li className="mr-1">
                        <NavLink 
                        className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                        to="/streams/new"
                        exact>Add Stream         
                        </NavLink>
                    </li>
                </div>
                <div class="menu-flex__list">
                    <li>
                        <GoogleAuth />
                    </li>

                    <li className="-mb-px mr-1">
                        <NavLink 
                        className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                        to="/signup"
                        exact>Sign Up          
                        </NavLink>
                    </li>

                    <li className="mr-1">
                        <NavLink 
                        className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                        to="/login"
                        exact>Login         
                        </NavLink>
                    </li>
                </div>
                
            </ul>
            
        )
    }
}

export default NavBar