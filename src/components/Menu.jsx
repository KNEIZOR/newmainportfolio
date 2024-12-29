import React from "react";
import "../styles/menu.css";
import { Link } from "react-scroll";
import { anchors } from "../utils/anchors";

const Menu = () => {
    return (
        <div className="menu">
            <div className="anchors">
                {anchors.map((i) => (
                    <div key={i.link} className="anchor">
                        <Link
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to={i.link}
                        >
                            {i.name}
                        </Link>
                        <div className="circle"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
