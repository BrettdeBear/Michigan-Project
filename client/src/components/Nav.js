import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {


    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink exact to="authentication">
                        Login/Sign Up
                    </NavLink>
            </li>
            </ul>
        </nav>
    )
}

export default Nav;