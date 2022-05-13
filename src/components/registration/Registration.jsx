import React, { useEffect, useState } from 'react';
import './Registration.css'
import { Controller, useForm } from 'react-hook-form'
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";
import axios from 'axios'




const Registration = () => {
    const {
        control,
        register,
        formState: { errors },
        reset,
        handleSubmit
    } = useForm({
        mode: 'onBlur'
    });

    const [proffesors, setProffesors] = useState([{ body: 'нет данных' }])
    const [school, setSchool] = useState([{ body: 'нет данных' }])
    const [profile, setProfile] = useState([{ body: 'нет данных' }])

    const onSubmit = data => {
        console.log(data);
        reset()
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/school`)
            .then((resp) => {
                const allPersons = resp.data;
                setSchool(allPersons);
            });
    }, [setSchool]);

    useEffect(() => {
        axios.get(`http://localhost:3000/proffesors`)
            .then((resp) => {
                const all = resp.data;
                setProffesors(all);
            });
    }, [setProffesors]);

    useEffect(() => {
        axios.get(`http://localhost:3000/profile`)
            .then((resp) => {
                const al = resp.data;
                setProfile(al);
            });
    }, [setProfile]);

    return (
        <div className='regContainer'>
            <div className="regWrapp">
                <div className="regTitle">Регистрация</div>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>

                    <label>Выберите конкурс:</label>
                    <select {...register("course", {
                        required: 'Выберите конкурс!',
                    })}>
                        <option value="">...</option>
                        <option value="fullTime">Очный конкурсыыыыы</option>
                        <option value="correspodence">Заочный конкурс</option>
                    </select>
                    {errors.course && <p>{errors.course.message}</p>}

                    <label>Выберите класс:</label>
                    <select {...register("class", {
                        required: 'Выберите класс!',
                    })}>
                        <option value="">...</option>
                        <option value="5-6 class">5-6 класс</option>
                        <option value="7 class">7 класс</option>
                        <option value="8-9 class">8-9 класс</option>
                        <option value="10-11 class">10-11 класс</option>
                    </select>
                    {errors.class && <p>{errors.class.message}</p>}

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
                    <select {...register("school", {
                        required: 'Это поле обязательно для заполнения',
                    })} placeholder="..." >
                        {school?.map((data, index) => {
                            return <option key={index} value={data.title}>{data.title}</option>
                        })}
                    </select>
                    {errors.school && <p>{errors.school.message}</p>}


                    <label>Название кружка:</label>
                    <select {...register("section", {
                        required: 'Это поле обязательно для заполнения',
                    })} placeholder="..." >
                        {profile?.map((data, index) => {
                            return <option key={index} value={data.name}>{data.name}</option>
                        })}
                    </select>
                    {errors.section && <p>{errors.section.message}</p>}

                    <label>Имя руководителя:</label>
                    <select {...register("professor", {
                        required: 'Это поле обязательно для заполнения',
                    })} placeholder="..." >
                        {proffesors?.map((data, index) => {
                            return <option key={index} value={data.title}>{data.title}</option>
                        })}
                    </select>
                    {errors.professor && <p>{errors.professor.message}</p>}


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

                    <input className='as' type="submit" value='Готово' />
                </form>
            </div>
        </div>
    );
};

export default Registration;