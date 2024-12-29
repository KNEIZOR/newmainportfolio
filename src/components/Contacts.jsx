import React, { useEffect, useRef, useState } from "react";
import "../styles/contacts.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { links } from "../utils/links";
import observer from "../hooks/observer"

const Contacts = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [mess, setMess] = useState("");
    const [validated, setValidated] = useState(false);
    const target = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (form.checkValidity() === true) {
            sendMessageForm(event);
        }
    };

    async function sendMessageForm(e) {
        const chatId = "1192110956";
        const token = "7364283093:AAG-s79-gAJZulMMRTGeCy43Rw1boyVd3Vs";

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
        try {
            await axios.get(
                `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${`Зовут: ${name}, контакт: ${contact}, сообщение: ${mess}`}`
            );
        } catch (e) {
            console.log(e.message);
        }
        setName("");
        setContact("");
        setMess("");
    }

    useEffect(() => {
        observer(target, "form-view", "0px 0px -30px 0px")
    }, [])

    return (
        <div className="contacts">
            <div className="contacts__wrapper" ref={target}>
                <h2>Давайте пообщаемся</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Введите имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Form.Control.Feedback>
                                Отлично
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Введите имя
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom02">
                            <Form.Label>Контакты</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Введите ваши контакты"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                            <Form.Control.Feedback>
                                Отлично
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Введите контакты
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom03">
                            <Form.Label>Сообщение</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите сообщение"
                                value={mess}
                                onChange={(e) => setMess(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback>
                                Отлично
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Отправить</Button>
                </Form>
                <div className="contacts-links">
                    {links.map((i) => (
                        <div key={i.link} className="contact-link">
                            <a href={i.link} target="_blank" rel="noreferrer">
                                {i.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contacts;
