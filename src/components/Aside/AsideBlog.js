import React from 'react';
import './AsideBlog.css';
import pic2 from './pic2.jpeg';
import pic3 from './pic3.jpeg';
import img2 from './img2.jpeg';
import Blog from './Blog';


const posts = [
    {id: "1",src: pic2,alt: "pic2",title: "How to learn Web Development",by:'By Joneas Schemedtmann'},
    {id: "2",src: pic3,alt: "pic3",title: "The Unknown Powers of CSS",by:'By Jim Dillon'},
    {id: "3",src: img2,alt: "img2",title: "Why Javascript is Awesome",by:'By Marilda'},
];
const AsideBlog = () => {
    return(
        <aside>
            <h4>Related posts</h4>
                <ul className="related-post">
                    {posts.map((related) => (
                    <Blog id={related.id} src={related.src} alt={related.alt} name={related.title} by={related.by}/>
                    ))}  
                </ul>
        </aside>
    );
};

export default AsideBlog;