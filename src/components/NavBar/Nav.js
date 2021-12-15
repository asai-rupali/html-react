import React from 'react';
import './Nav.css';
import NavItem from './NavItems';



const data = [
    {id: "1",item: "Home"},
    {id: "2",item: "Blogs"},
    {id: "3",item: "Challenges"},
    {id: "4",item: "Flexbox"},
    {id: "5",item: "Grid"},
    {id: "6",item: "Service Details"}
];

const Nav = () => {
    return(   
        <header className="main-header clearfix">
            <h1>📘 The Code Magazine</h1>   
             
            {data.map((data) => (
                <NavItem item={data.item} key={data.item}/>
            ))}    
                  
        </header>
    );
};

export default Nav;
 