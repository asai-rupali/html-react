import React from 'react';
import './WebArticle.css';
import img1 from './img1.jpeg';
import pic1 from './pic1.jpeg';
import ArticlePartOne from './ArticlePartOne';
import ArticlePartTwo from './ArticlePartTwo';
import FooterBlog from '../Footer/FooterBlog';


const taglist = [
    {id:"1", list:"The opening tag"},
    {id:"2", list:"The closing tag"},
    {id:"3", list:"The actual element"},
];

const list = [
    {id:"1", items:"To be able to use the fundamental web dev language"},
    {id:"2", items:"To hand-craft beautiful websites instead of relying on tools like Worpress or Wix"},
    {id:"3", items:"To build web applications"},
    {id:"4", items:"To impress friends"},
    {id:"5", items:"To have fun 😃"},
];

const WebArticle = () => {
    return(
        <article>
            <header className="post-header">
               <h2>The Basic Language of the Web: HTML</h2>
               <div className="author-box">
                    <img src={img1} className="author-img" alt="img1" height="50px" width="50px" />
                    <p className="author">Posted by <b>Laura Jones</b> on Monday, June 21st 2021 </p>
                </div>
                    <img src={pic1} className="post-img" alt="pic1" />
                {/* <button>♥ Like</button> */}
            </header>
            <p>All modern websites and web applications are built using three <em>fundamental</em> technologies: HTML, CSS and JavaScript. 
               These are the languages of the web.
               In this post, let's focus on HTML. We will learn what HTML is all about, and why you too should learn it.</p>

            <h2>What is HTML?</h2>
            <p>HTML stands for HyperText Markup Language. It's a markup language that web developers use to structure and describe the content of a webpage (not a programming language).   
               HTML consists of elements that describe different types of content: paragraphs, links, headings, images, video, etc. Web browsers understand HTML and render HTML code as websites
               In HTML, each element is made up of 3 parts:</p>
        
            <ol>
                {taglist.map((tags) => (
                   <ArticlePartOne id={tags.id} list={tags.list} />
                ))}
            </ol>

            <p>You can learn more at the <a href="#">MDN Web Docs.</a></p>

            <h2>Why should you learn HTML?</h2>
            <p> There are countless reasons for learning the fundamental language of the web.
                Here are 5 of them:</p>
            <ul>
                {list.map((unorder) => (
                   <ArticlePartTwo id={unorder.id} items={unorder.items} />
                ))}  
            </ul>

            <p>Hopefully you learned something new here. See you next time</p>

            <FooterBlog />
                
        </article> 
    );
};

export default WebArticle;