import React from 'react';
import './NavItems.css';
import {BrowserRouter as Router,Switch,Route,NavLink,Link} from "react-router-dom";
import Menu from './Menu';

const NavItem = (props) => {
    return(
        <Router>
            <NavLink to={props.url}> <strong>{props.item}</strong></NavLink>
            <Switch>
                <Route path={props.url}  />
            </Switch>
       </Router>
        
    );
};

export default NavItem;