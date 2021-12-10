import React from "react";
import WebArticle from "./Article/WebArticle";
import AsideBlog from "./Aside/AsideBlog";

export default function Home() {
  return (
    <>
       <div className="container">
        <WebArticle />
        <AsideBlog />
      </div>
    </>
  );
}