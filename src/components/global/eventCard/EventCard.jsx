import React from 'react';
import { NavLink } from 'react-router-dom';
import './EventCard.css'

const EventCard = ({ id, eventsDate, eventsTime, eventsTitle, eventsImg, eventsDiscription }) => {
    return (
        <NavLink className="eventCardLink" to={`/eventpage/${id}`}>
            <div className='eventCard'>
                <div className="eventCard_date__block">
                    <div className="eventCard_date">{eventsDate}</div>
                    <div className="eventCard_time">{eventsTime}</div>
                </div>
                <div className="eventCard_img">
                    <img className='event_img' src={eventsImg} alt="" />
                </div>
                <div className="eventCard_title">
                    {eventsTitle}
                </div>
                <div className="eventCard_discription">
                    <p>{eventsDiscription}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default EventCard;