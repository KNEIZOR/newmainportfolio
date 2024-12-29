import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/modalAdmin.css";
import { admin } from "../admin";
import { Context } from "..";
import { useLocation, useNavigate } from "react-router-dom";
import { CLIENT_ROUTE } from "../utils/const";
import observer from "../hooks/observer";

const ModalAdmin = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { setIsAdmin } = useContext(Context);
    const navigate = useNavigate();
    let modal = useRef(null)

    function setRole(e) {
        e.preventDefault();
        if (admin.login === login && admin.password === password) {
            setIsAdmin(true);
            localStorage.setItem("isAdmin", "true");
        } else {
            setIsAdmin(false);
            setLogin("")
            setPassword("")
        }
    }
    
    
    useEffect(() => {
        observer(modal, "in-view", "0px 0px -30px 0px")
    }, [])

    return (
        <div className="modal__wrapper" ref={modal}>
            <div className="admin-modal">
                <form>
                    <label htmlFor="login">Логин</label>
                    <input
                        type="text"
                        placeholder="Введите логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <label style={{marginTop: "10px"}} htmlFor="login">Пароль</label>
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="buttons">
                        <button className="close" onClick={() => navigate(CLIENT_ROUTE)}>
                            close
                        </button>
                        <button className="submit" onClick={(e) => setRole(e)}>submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalAdmin;
