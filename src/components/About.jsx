import React, { useEffect, useRef } from "react";
import "../styles/about.css";
import { months } from "../utils/month";
import observer from "../hooks/observer";
import iPNG from "../assets/i.png";

const About = () => {
    const exp = new Date(2022, 7);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const expYear = exp.getFullYear();
    const resExpYear = year - expYear;
    let textYear = "года";
    const target = useRef(null);

    if (resExpYear < 5) {
        textYear = "года";
    } else if (resExpYear >= 5) {
        textYear = "лет";
    }

    useEffect(() => {
        observer(target, "in-view", "0px 0px -30px 0px");
    }, []);

    return (
        <div className="about">
            <div className="about__wrapper" ref={target}>
                <div className="about-text">
                    <p>
                        Меня зовут Стукало Денис, я frontend-разработчик, <br />
                        на{" "}
                        <span>
                            {day} {months[month]} {year} года
                        </span>{" "}
                        имею опыт работы в{" "}
                        <span>
                            {resExpYear} {textYear}
                        </span>
                    </p>
                </div>
                <div className="about-img">
                    <img src={iPNG} alt="frontend-developer" />
                    <div className="lines">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                        <div className="line line4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
