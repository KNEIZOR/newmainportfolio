import React, { useContext } from "react";
import "../styles/projects.css";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Projects = () => {
    const { projects, isLoading, error } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="projects">
            {isLoading && <Loader text="Загрузка работ..." />}
            {error && <Error text={`Ошибка: ${error}`} />}
            {projects.map((i) => (
                <div key={i.id} className="project">
                    <div className="project-img">
                        <img src={i.img} alt={i.name} />
                    </div>
                    <div className="project-name">
                        <h2>{i.name}</h2>
                    </div>
                    <div className="project-buttons">
                        <a href={i.link} target="_blank" rel="noreferrer">
                            Открыть сайт
                        </a>
                        <button onClick={() => navigate(`/projects/${i.id}`)}>
                            Описание
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
