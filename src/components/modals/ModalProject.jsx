import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../..";

const ModalProject = ({ show, onHide }) => {
    const { createProject } = useContext(Context);
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [stack, setStack] = useState("");
    const [img, setImg] = useState("");
    const [about, setAbout] = useState("");

    function postProject() {
        const newProject = {
            id: `${Date.now()}`,
            name,
            link,
            stack: stack.split(";"),
            img,
            about,
        };
        
        createProject(newProject);
        setName("");
        setLink("");
        setStack("");
        setImg("");
        setAbout("");
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="bg-dark">
                <Modal.Title>Cоздать проект</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark">
                <Form noValidate>
                    <Form.Control
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите название проекта"
                        style={{ width: "90%", marginBottom: 20 }}
                    />
                    <Form.Control
                        required
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Введите ссылку"
                        style={{ width: "90%", marginBottom: 20 }}
                    />
                    <Form.Control
                        required
                        type="text"
                        placeholder="Введите стек"
                        value={stack}
                        onChange={(e) => setStack(e.target.value)}
                        style={{ width: "90%", marginBottom: 20 }}
                    />
                    <Form.Control
                        required
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        placeholder="Введите ссылку на картинку"
                        style={{ width: "90%", marginBottom: 20 }}
                    />
                    <Form.Control
                        required
                        type="text"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Введите описание проекта"
                        style={{ width: "90%", marginBottom: 20 }}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer className="bg-dark">
                <Button variant="secondary" onClick={() => onHide()}>
                    Close
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    onClick={() => [postProject(), onHide()]}
                >
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalProject;
