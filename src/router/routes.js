import ModalAdmin from "../components/ModalAdmin";
import Project from "../pages/Project";
import Admin from "../pages/Admin";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";
import Projects from "../pages/Projects";
import {
    ADMIN_ROUTE,
    BLOG_ROUTE,
    CLIENT_ROUTE,
    LOGIN_ROUTE,
    PROJECT_ROUTE,
    PROJECTS_ROUTE,
} from "../utils/const";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
];

export const clientRoutes = [
    {
        path: CLIENT_ROUTE,
        Component: Portfolio,
    },
    {
        path: BLOG_ROUTE,
        Component: Blog,
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects,
    },
    {
        path: PROJECT_ROUTE,
        Component: Project,
    },
];
