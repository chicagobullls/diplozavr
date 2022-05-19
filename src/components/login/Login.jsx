import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });
    const onSubmit = data => console.log(data);
    return (
        <div className='login_wrapp'>
            <div className="container">
                <div className="login_title"><span>АВТОРИЗАЦИЯ</span></div>
                <form className='log_form' onSubmit={handleSubmit(onSubmit)}>

                    <label>Email:</label>
                    <input className='loginp' {...register("email", {
                        required: 'Это поле обязательно для заполнения',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Email введен некоректно' // JS only: <p>error message</p> TS only support string
                        }

                    })} placeholder="..." />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label>Пароль:</label>
                    <input className='loginp' {...register("password", {
                        required: 'Это поле обязательно для заполнения',
                        minLength: {
                            value: '6',
                            message: 'Длина пароля не должна быть меньше 6 символов'
                        }


                    })} placeholder="..." />

                    {errors.password && <p>{errors.password.message}</p>}

                    <input type="submit" value='Войти' />
                </form>
                <div className="log_discription">
                    <span>Внимание!</span>
                    <span>Авторизация доступна только преподавателям и участникам заочного конкурса.</span>
                    <span>Участникам очного конкурса авторизация не доступна!</span>
                </div>

            </div>
        </div>
    );
};

export default Login;