import React from 'react';
import { NavLink } from 'react-router-dom'
import './Switch.css'

const Switch = () => {
    return (
        <div className='switch_wrapp'>
            <div className="switch_container">
                <div className="switch_title">Выберите роль</div>
                <div className="switch_btn">
                    <NavLink to="/registration" className="switch_navlink">Студент</NavLink>
                    <NavLink to="/registration/proffesors" className="switch_navlink">Руководитель кружка</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Switch;