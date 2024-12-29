import React, { useContext, useState } from 'react';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import { CLIENT_ROUTE } from '../utils/const';
import '../styles/admin.css'
import ModalProject from '../components/modals/ModalProject';
import ModalBlog from '../components/modals/ModalBlog';

const Admin = () => {
    const {setIsAdmin} = useContext(Context)
    const navigate = useNavigate()
    const [isModalProject, setIsModalProject] = useState(false)
    const [isModalBlog, setIsModalBlog] = useState(false)
    
    function logout() {
        setIsAdmin(false)
        localStorage.removeItem('isAdmin')
        navigate(CLIENT_ROUTE)
    }

    function closeProjectModal() {
        setIsModalProject(false)
    }

    return (
        <div className='admin'>
            {isModalProject && <ModalProject show={isModalProject} onHide={closeProjectModal}/>}
            {isModalBlog && <ModalBlog />}
            <button onClick={() => setIsModalProject(true)}>Создать проект</button>
            <button onClick={() => setIsModalBlog(true)}>Создать блог</button>
            <button onClick={logout}>выйти из админки</button>
        </div>
    );
};

export default Admin;