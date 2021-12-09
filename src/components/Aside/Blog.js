import React from 'react';
import './AsideBlog.css';

const Blog = (props) => {
    return(
        <li className="related-post">
            <img src={props.src} alt={props.alt} width="75" height="75" />
            <a href="#" className="related-link">{props.name}</a>
            <p className="related-author">{props.by}</p>
        </li>
    );
};

export default Blog;