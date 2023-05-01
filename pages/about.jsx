import React from "react";

const About = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <h1>About</h1>
      <button onClick={handleClick}>click me</button>
    </>
  );
};

export default About;
