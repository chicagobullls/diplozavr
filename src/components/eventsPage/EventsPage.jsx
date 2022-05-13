import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import { Link } from 'react-router-dom';
import EventCard from '../global/eventCard/EventCard';
import './EventsPage.css'


const EventsPage = () => {
    const { id } = useParams()
    const [eventPage, setEventPage] = useState()
    const [events, setEvents] = useState()

    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:3000/events?id=${id}`)
            .then((resp) => {
                const eventpagecontent = resp.data[0];
                setEventPage(eventpagecontent);
            });

        axios.get(`http://localhost:3000/events`)
            .then((resp) => {
                const allevents = resp.data;
                setEvents(allevents);
            });

    }, [id]);

    return (
        <div className='eventpage_wrapp'>
            <div className="eventpage_container">
                <div className="eventpage_title">{eventPage?.title}</div>
                <div className="eventpage_date">{eventPage?.date}</div>
                <div className="eventpage_img"><img className='eventpage_img' src={eventPage?.img} alt="" /></div>
                <div className="eventpage_dicription">
                    <p>{eventPage?.discription}</p>
                </div>
            </div>
            <div className="eventscolumn">
                <div className="eventscolumn_title">Последние события</div>
                {events?.map((data, index) => {
                    return <EventCard key={index} id={data.id} eventsDate={data.date} eventsTime={data.time} eventsTitle={data.title} eventsImg={data.img} eventsDiscription={data.discription} />
                }).slice(0, 3)}
                <Link className='eventscolumn_link' to="/">все события</Link>
            </div>

        </div>
    );
};

export default EventsPage;