import CurrentSkill from "./components/CurrentSkill";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MoreProjects from "./components/MoreProjects";
import Nav from "./components/Nav";

import React from 'react'
import Test from "./components/Test";

const Output = () => {
  return (
    <div className="output">
        <Nav/>
        <Hero/>
        <FeaturedProjects/>
        {/* <MoreProjects/> */}
        <CurrentSkill/>
        <Test/>
        <Footer/>
    </div>
  )
}

export default Output