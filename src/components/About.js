import React from "react";

function About({ blogImg, blogText }) {
  const imageUrl = blogImg || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{blogText}</p>
    </aside>
  );
}

export default About;
