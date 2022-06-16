import CurrentSkill from "./components/CurrentSkill";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MoreProjects from "./components/MoreProjects";
import Nav from "./components/Nav";

import React from 'react'

const Output = () => {
  return (
    <div className="output">
        <Nav/>
        <Hero/>
        <FeaturedProjects/>
        {/* <MoreProjects/> */}
        <CurrentSkill/>
        <Footer/>
    </div>
  )
}

export default Output