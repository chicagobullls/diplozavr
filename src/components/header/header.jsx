import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../utiles/logo1.jpg'
import './header.css'

const Header = () => {
    const [weather, setWeather] = useState()


    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Novosibirsk&lang=ru&units=metric&appid=11f9f641912ccc9a89b7d7bcb8709d97`)
            .then((resp) => {
                const allWeather = resp.data;
                setWeather(allWeather);
            });
    }, [setWeather]);

    console.log('погода', weather)
    return (
        <div className="header_global">
            <div className="header">
                <div className="header_logo"><NavLink to="/" ><img src={logo} alt="" /></NavLink></div>
                <div className="header_weather">
                    <span>{Math.round(weather?.main.temp)}°C</span>
                </div>

            </div>
            <div className='post-element'>
                <div className="header_wrapper">
                    <NavLink to="/olimp" className="navlink">ОЛИМПИАДНИКУ</NavLink>
                    <NavLink to="/FullTime" className="navlink">ОЧНЫЙ КОНКУРС</NavLink>
                    <NavLink to="/Correspondence" className="navlink">ЗАОЧНЫЙ КОНКУРС</NavLink>
                    <NavLink to="/howToGet" className="navlink">КАК ДОБРАТЬСЯ</NavLink>
                    <NavLink to="/switch" className="navlink">РЕГИСТРАЦИЯ</NavLink>
                    <NavLink to="/login" className="navlink">АВТОРИЗАЦИЯ</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;