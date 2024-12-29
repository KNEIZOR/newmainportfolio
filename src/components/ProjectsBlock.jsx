import React, { useContext, useEffect, useRef } from "react";
import "../styles/projectsBlock.css";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { PROJECTS_ROUTE } from "../utils/const";
import observer from "../hooks/observer";
import Loader from "./Loader";
import Error from "./Error";

const ProjectsBlock = () => {
    const { projects, isLoading, error } = useContext(Context);
    const navigate = useNavigate();
    const target = useRef(null);
    const viewProjects = projects.slice(0, 4);

    useEffect(() => {
        observer(target, "projects-block-view", "0px 0px -30px 0px");
    }, []);

    return (
        <div className="projects-block" ref={target}>
            <h1>Мои работы</h1>
            {isLoading && (
                <Loader
                    variantColor="light"
                    text="Идет загрузка работ..."
                    size="50px"
                    marginTop="30px"
                />
            )}
            {error && <Error text={`Ошибка: ${error}`}/>}
            <div className="projects-blocks">
                {viewProjects.map((i) => (
                    <div key={i.id} className="project-block">
                        <a href={i.link} target="_blank" rel="noreferrer">
                            <div className="img__wrapper">
                                <img src={i.img} alt={i.name} />
                            </div>
                            <h2>{i.name}</h2>
                        </a>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate(PROJECTS_ROUTE)}>
                Посмотреть все мои работы
            </button>
        </div>
    );
};

export default ProjectsBlock;
