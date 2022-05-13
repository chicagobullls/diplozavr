import React from 'react';
import { Controller, useForm } from 'react-hook-form'
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";


const RegistrationProf = () => {


    const {
        control,
        register,
        formState: { errors },
        reset,
        handleSubmit
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = data => {
        console.log(data);
        reset()
    }
    return (
        <div className=''>
            <div className='regContainer'>
                <div className="regWrapp">
                    <div className="regTitle">Регистрация</div>
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <label>Имя:</label>
                        <input {...register("firstName", {
                            required: 'Это поле обязательно для заполнения',
                            minLength: {
                                value: 1,
                                message: 'Минимальная длинна 1 символ'
                            },
                            maxLength: {
                                value: 22,
                                message: 'Максимальная длинна 22 символа'
                            }


                        })}
                            placeholder="..." />
                        {errors.firstName && <p>{errors.firstName.message}</p>}


                        <label>Фамилия:</label>
                        <input {...register("lastName", {
                            required: 'Это поле обязательно для заполнения',
                            maxLength: {
                                value: 22,
                                message: 'Максимальная длинна 22 символа'
                            }
                        })} placeholder="..." />
                        {errors.lastName && <p>Это поле обязательно для ввода</p>}


                        <label>Отчество:</label>
                        <input {...register("patronymic", {
                            required: 'Это поле обязательно для заполнения',
                            maxLength: {
                                value: 22,
                                message: 'Максимальная длинна 22 символа'
                            },
                        })} placeholder="..." />
                        {errors.patronymic && <p>{errors.patronymic.message}</p>}


                        <label>Дата рождения:</label>
                        <input {...register("birthday", {
                            required: 'Это поле обязательно для заполнения',
                            maxLength: {
                                value: 22,
                                message: 'Максимальная длинна 22 символа'
                            }
                        })} type="date" />
                        {errors.birthday && <p>{errors.birthday.message}</p>}


                        <label>Название образовательного учреждения:</label>
                        <input {...register("school", {
                            required: 'Это поле обязательно для заполнения',
                            maxLength: {
                                value: 22,
                                message: 'Максимальная длинна 22 символа'
                            }
                        })} placeholder="..." />
                        {errors.school && <p>{errors.school.message}</p>}


                        <label>Название кружка:</label>
                        <input {...register("section", {
                            required: 'Это поле обязательно для заполнения',
                            maxLength: {
                                value: 22,
                                message: 'Максимальная длинна 22 символа'
                            }
                        })} placeholder="..." />
                        {errors.section && <p>{errors.section.message}</p>}

                        <label>Телефон:</label>

                        <Controller
                            control={control}

                            name="number"
                            defaultValue=''
                            rules={{
                                required: 'Это поле обязательно для заполнения',
                                maxLength: 100,
                            }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <InputMask mask="+7 (999) 999 99-99"
                                    placeholder='...'
                                    value={value}
                                    onChange={onChange}
                                    {...ref}
                                    onBlur={onBlur} />
                            )}
                        />
                        {errors.number && <p>{errors.number.message}</p>}

                        <label>Email:</label>
                        <input {...register("email", {
                            required: 'Это поле обязательно для заполнения',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Email введен некоректно' // JS only: <p>error message</p> TS only support string
                            }

                        })} placeholder="..." />
                        {errors.email && <p>{errors.email.message}</p>}


                        <label>Пароль:</label>
                        <input {...register("password", {
                            required: 'Это поле обязательно для заполнения',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: 'Минимум восемь символов, минимум одна буква и одна цифра:' // JS only: <p>error message</p> TS only support string
                            }

                        })} placeholder="..." />
                        {errors.password && <p>{errors.password.message}</p>}

                        <input className='as' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationProf;