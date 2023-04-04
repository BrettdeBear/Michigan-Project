import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Nav({updateUser}) {
    const history = useHistory()

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(response => {
            if(response.ok){
                updateUser(null)
                history.push('/authentication')
            }
        })
    }

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink exact to="/authentication">
                        Login/Sign Up
                    </NavLink>
                </li>
                <li onClick={handleLogout}> 
                    <NavLink exact to="/logout">
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;