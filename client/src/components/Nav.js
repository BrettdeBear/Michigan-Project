import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Nav({updateUser}) {
    const history = useHistory()

    const handleLogout = () => {
        fetch("/logout", {
            method: 'DELETE',
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
                    <NavLink className="brand-name" exact to='/'>
                        <strong>Michigan Outdoors</strong>
                    </NavLink>
                    {/* <NavLink className="navLink" exact to="/">
                        Home
                    </NavLink> */}
                </li>
                <li>
                    <NavLink className='navLink' activeClassName='active' exact to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navLink" activeClassName='active' exact to="/parks">
                        Parks
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navLink" activeClassName='active' exact to="/authentication">
                        Login/Sign Up
                    </NavLink>
                </li>
                <li onClick={handleLogout}> 
                    <NavLink className="navLink" exact to="/logout">
                        Logout
                    </NavLink>
                </li>
            </ul>
            <br></br><br></br>
        </nav>
    )
}

export default Nav;