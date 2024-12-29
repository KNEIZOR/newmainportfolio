import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Context } from "./index";
import { useFetching } from "./hooks/useFetching";
import ProjectService from "./API/ProjectService";

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [projects, setProjects] = useState([]);
    const [fetchProjects, isLoading, error] = useFetching(async () => {
        const projects = await ProjectService.getAll("projects");
        setProjects(projects);
    });

    useEffect(() => {
        if (localStorage.getItem("isAdmin")) {
            setIsAdmin(true);
        }
        fetchProjects();
    }, []);

    function createProject(newProject) {
        ProjectService.post("projects", newProject);
        setProjects([...projects, newProject]);
    }

    return (
        <Context.Provider
            value={{
                isAdmin,
                setIsAdmin,
                projects,
                setProjects,
                isLoading,
                error,
                createProject,
            }}
        >
            <Navbar />
            <AppRouter />
        </Context.Provider>
    );
}

export default App;
