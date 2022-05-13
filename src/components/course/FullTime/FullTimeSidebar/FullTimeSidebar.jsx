import React from 'react';
import { NavLink } from 'react-router-dom'
import './FullTimeSidebar.css'

const FullTimeSidebar = () => {
    return (
        <div className="sidebar">
            <NavLink className='documentsLink' to='/FullTime'>1.Списки</NavLink>
            <NavLink className='documentsLink' to='/FullTime/Documents'>2.Документы</NavLink>
        </div>
    );
};

export default FullTimeSidebar;