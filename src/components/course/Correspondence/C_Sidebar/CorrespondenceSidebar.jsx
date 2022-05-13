import React from 'react';
import { NavLink } from 'react-router-dom'
import './CorrespondenceSidebar.css'

const CorrespondenceSidebar = () => {
    return (
        <div className="sidebar">
            <NavLink className='documentsLink' to='/Correspondence'>1.Списки</NavLink>
            <NavLink className='documentsLink' to='/Correspondence/Documents'>2.Документы</NavLink>
        </div>
    );
};

export default CorrespondenceSidebar;
