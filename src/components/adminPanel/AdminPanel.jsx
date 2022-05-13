import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import './AdminPanel.css'
import axios from 'axios'
import NewsCard from '../global/newsCard/NewsCard';
import EventCard from '../global/eventCard/EventCard';

const AdminPanel = () => {
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
        <div className='admin_wrapper'>
            <div className="admin_container">
                <div className="admin_main-title">
                    Панель Администратора
                </div>
                <label className='admin_label'>Наполнение слайдера:</label>
                <div className="slider_block">
                    <Table columns={
                        [
                            { title: 'id', field: 'id', type: 'numeric' },
                            { title: 'Заголовок', field: 'title' },
                            { title: 'Описание', field: 'discription' },
                            { title: 'Изображение', field: 'img' },
                        ]
                    }
                        data={
                            [
                                { id: '1', title: 'Дергунов', discription: 'sadasgfasg', img: 'https://s.daitictic.com/contents/videos_screenshots/7000/7637/preview.jpg' }
                            ]
                        }
                    />
                </div>

                <label className='admin_label'>Новости:</label>
                <div className="admin_news-block">
                    <div className="news_wrapper" id='news_wrapper'>
                        {news?.map((data, index) => {
                            return <NewsCard className="newscardlist" key={index} id={data.id} newsDate={data.date} newsTitle={data.title} newsImg={data.img} newsDiscription={data.discription} />
                        })}</div>

                </div>

                <label className='admin_label'>События:</label>
                <div className="admin_event-block">
                    <div className="event_wrapper">
                        {events?.map((data, index) => {
                            return <EventCard key={index} id={data.id} eventsDate={data.date} eventsTime={data.time} eventsTitle={data.title} eventsImg={data.img} eventsDiscription={data.discription} />
                        })}
                    </div>

                </div>

                <label className='admin_label'>Таблица пользователей:</label>
                <div className="table">

                </div>
            </div>
        </div>
    );
};

export default AdminPanel;