import React, { useContext } from 'react';
import "../styles/navbar.css"
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BLOG_ROUTE, CLIENT_ROUTE, PROJECTS_ROUTE } from '../utils/const';

const Navbar = () => {
    const {isAdmin} = useContext(Context)
    const navigate = useNavigate()

    return (
        <nav>
            <div className='nav-buttons'>
                <button onClick={() => navigate(CLIENT_ROUTE)}>Главная</button>
                <button onClick={() => navigate(PROJECTS_ROUTE)}>Работы</button>
                <button onClick={() => navigate(BLOG_ROUTE)}>Блог</button>
                {isAdmin && <button onClick={() => navigate(ADMIN_ROUTE)}>Админ</button>}
            </div>
        </nav>
    );
};

export default Navbar;