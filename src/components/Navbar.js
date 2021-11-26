import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <ul className="flex border-b">
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
            </ul>
            
        )
    }
}

export default NavBar