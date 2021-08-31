import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="flex w-full justify-between text-center bg-gray-200 text-white p-3 space-x-2">
                    <div>
                        <NavLink 
                        to="/"
                        exact>Home          
                        </NavLink>
                    </div>
                </nav>
            </div>
            
        )
    }
}

export default NavBar