import React from 'react';
import './NavItems.css';
import {BrowserRouter as Router,Switch,Route,NavLink,Link} from "react-router-dom";
import Home from '../Home';

const NavItem = (props) => {
    return(
        <Link to={`/${props.item}`}>{props.item}</Link>
    );
};

export default NavItem;