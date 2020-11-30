import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { getSortedPostsData } from "../lib/posts";

const About = ({ allPostsData }) => {
  return (
    <div>
      <h1>Esta es la pagina About:{JSON.stringify(allPostsData)}</h1>
    </div>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default About;
