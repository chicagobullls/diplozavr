import React, { useEffect, useState } from 'react';
import './Global.css'
import Newscard from './newsCard/NewsCard';
import axios from 'axios'
import EventCard from './eventCard/EventCard';
import Slider from './slider/Slider';

const Global = () => {
    const [news, setNews] = useState()
    const [events, setEvents] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3000/news`)
            .then((resp) => {
                const allnews = resp.data;
                setNews(allnews);
            });
        axios.get(`http://localhost:3000/events`)
            .then((resp) => {
                const allevents = resp.data;
                setEvents(allevents);
            });
    }, [setNews, setEvents]);

    return (
        <div className="global">
            <Slider />
            <div className='global_wrapper'>
                <div className="main-block">
                    <div className="news_block">
                        <div className="news_title"><span>Новости</span></div>
                        <div className="newsarray">
                            {news?.map((data, index) => {
                                return <Newscard key={index} id={data.id} newsDate={data.date} newsTitle={data.title} newsImg={data.img} newsDiscription={data.discription} />
                            })}
                        </div>
                    </div>
                    <div className="eventCollumn">
                        <div className="eventCollumn_title"><span>Cобытия</span></div>
                        {events?.map((data, index) => {
                            return <EventCard key={index} id={data.id} eventsDate={data.date} eventsTime={data.time} eventsTitle={data.title} eventsImg={data.img} eventsDiscription={data.discription} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Global;
