import React from 'react';
import './Nav.css';
import NavItem from './NavItems';



const data = [
    {id: "1",item: "Blog",url:"/Blog"},
    {id: "2",item: "Challenges",url:"/challenges"},
    {id: "3",item: "Flexbox",url:"/flexbox"},
    {id: "4",item: "CSS Grid",url:"/grid"}
];

const Nav = () => {
    return(   
        <header className="main-header clearfix">
            <h1>📘 The Code Magazine</h1>   
             
            {data.map((menus) => (
                <NavItem id={menus.id} item={menus.item} url={menus.url}/>
            ))}            
        </header>
    );
};

export default Nav;
 