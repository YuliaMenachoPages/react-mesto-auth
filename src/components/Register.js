import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as auth from '../utils/auth';
import PopupWithLogin from "./PopupWithLogin";

const Register = (props) => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        auth.register(formValue.email, formValue.password)
            .then((res) => {
                navigate('/signin', {replace: true});
                props.setInfoToolTipStatus('ok');
            })
            .catch(() =>
                props.setInfoToolTipStatus('reject'))
            .finally(() => props.setIsInfoToolTipOpen(true));
    }

    return (
        <PopupWithLogin
            headerText='Регистрация'
            buttonText='Зарегистрироваться'
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formValue={formValue}
            isRegister={true}
        />
    )
}

export default Register