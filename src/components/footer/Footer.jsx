import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo_white from '../../utiles/NSU.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_wrapper">
            <div className='footer'>
                <div className="footer_logoBlock">
                    <div className="footer_logo"><img src={Logo_white} className='nsuLogo' alt="" /></div>
                    <span className='year'>© 2001–2022</span>
                    {/* <span>Высший колледж информатики НГУ</span> */}
                </div>
                <div className="footer_informationBlock">
                    <span>Телефон: +7 (383) 373-11-62</span>
                    <span>Е-mail:<a className='link' href="gen@ci.nsu.ru">gen@ci.nsu.ru</a></span>
                    <span>Адрес: 630058, г. Новосибирск, ул. Русская, 35</span>
                </div>
                <div className="footer_navblock">
                    <div className="footer_navblockOne">
                        <NavLink to="/olimp" className="footer_navlink">Олимпиаднику</NavLink>
                        <NavLink to="/ochKurs" className="footer_navlink">Очный курс</NavLink>
                        <NavLink to="/zaochKurs" className="footer_navlink">Заочный курс</NavLink>
                    </div>
                    <div className="footer_navblockSecond">
                        <NavLink to="/howToGet" className="footer_navlink">Как добраться</NavLink>
                        <NavLink to="/registration" className="footer_registration-navlink">Регистрация</NavLink>
                        <NavLink to="/login" className="footer_registration-navlink">Авторизация</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;