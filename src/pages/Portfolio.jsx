import React from "react";
import "../styles/portfolio.css";
import About from "../components/About";
import Menu from "../components/Menu";
import ProjectsBlock from "../components/ProjectsBlock";
import Contacts from "../components/Contacts";



const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="welcome">
                <h1>
                    <span>Приветствую,</span> <span>я</span>{" "}
                    <span>Стукало Денис</span>
                </h1>
                <p>Frontend-developer</p>
            </div>
            <Menu />
            <About />
            <ProjectsBlock />
            <Contacts />
        </div>
    );
};

export default Portfolio;
