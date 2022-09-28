import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
import { Input } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import { Button } from "@nextui-org/react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'URib_WZpFuZFAV6sR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='formBody'>
            <h1 className="title">Contacto</h1>
            <form ref={form} onSubmit={sendEmail} className="form">
                <div>
                    <Input type="text" animated={false} label="Nombre: " name="user_name" placeholder="Homero Gelves" />
                </div>
                <div>
                    <Input type="email" animated={false} label="Email: " name="user_email" placeholder="homero.dev@gmail.com" />
                </div>
                <div>
                    <Textarea label="Message: " placeholder="Hola Homero..."/>
                </div>
                <Button type="submit">Enviar</Button>
            </form>
        </div>
    );
};

export default Contact