import React from "react";
import Article from "./Article";

function Articlelist({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default Articlelist;
