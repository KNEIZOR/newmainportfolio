import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { adminRoutes, clientRoutes } from "../router/routes";
import { Context } from "../index";
import ModalAdmin from "./ModalAdmin";
import { ADMIN_ROUTE } from "../utils/const";

const AppRouter = () => {
    const location = useLocation();
    const { isAdmin } = useContext(Context);

    return (
        <Routes>
            {isAdmin &&
                adminRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {clientRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {location.pathname === "/admin" && (
                <Route path={ADMIN_ROUTE} element={<ModalAdmin />} />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
