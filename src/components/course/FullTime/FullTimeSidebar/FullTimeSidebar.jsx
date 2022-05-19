import React from 'react';
import { NavLink } from 'react-router-dom'
import './FullTimeSidebar.css'

const FullTimeSidebar = () => {
    return (
        <div className="sidebar">
            <NavLink className='documentsLink' to='/FullTime'>CПИСКИ</NavLink>
            <NavLink className='documentsLink' to='/FullTime/Documents'>ДОКУМЕНТЫ</NavLink>
        </div>
    );
};

export default FullTimeSidebar;