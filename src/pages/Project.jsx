import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import ProjectService from "../API/ProjectService";
import "../styles/project.css";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { PROJECTS_ROUTE } from "../utils/const";

const Project = () => {
    const params = useParams();
    const navigate = useNavigate()
    const [project, setProject] = useState({});
    const [fetchProjectsById, isLoading, error] = useFetching(async () => {
        const project = await ProjectService.getById("projects", params.id);
        setProject(project);
    });

    useEffect(() => {
        fetchProjectsById();
    }, []);

    return (
        <div className="project-page">
            <button className="back-btn" onClick={() => navigate(PROJECTS_ROUTE)}>Назад</button>
            {error && <Error />}
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="project-page-top">
                        <div className="project-page-img">
                            <img src={project.img} alt={project.name} />
                        </div>
                        <div className="project-page-text">
                            <h2 className="project-page-name">{project.name}</h2>
                            <div className="stack-list">
                                <h2>Используемый стек:</h2>
                                {!isLoading &&
                                    project.stack.map((i) => (
                                        <div key={i} className="stack-item">
                                            -{i}
                                        </div>
                                    ))}
                            </div>
                            <a className="project-page-link" href={project.link} target="_blank" rel="noreferrer">Открыть сайт</a>
                        </div>
                    </div>
                    <div className="project-page-bottom">
                        <h2 className="project-page-about">Описание</h2>
                        <div className="project-about">{project.about}</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Project;
