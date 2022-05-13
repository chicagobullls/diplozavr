import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './NewsPage.css'
import axios from 'axios'
import NewsCard from '../global/newsCard/NewsCard';
import { Link } from 'react-router-dom';

const NewsPage = () => {
    const { id } = useParams()
    const [newsPage, setNewsPage] = useState()
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:3000/news?id=${id}`)
            .then((resp) => {
                const newspagecontent = resp.data[0];
                setNewsPage(newspagecontent);
            });

        axios.get(`http://localhost:3000/news`)
            .then((resp) => {
                const allnews = resp.data;
                setNews(allnews);
            });

    }, [id]);

    const [news, setNews] = useState()

    return (
        <div className='newspage_wrapp'>
            <div className="newspage_container">
                <div className="newspage_title">{newsPage?.title}</div>
                <div className="newspage_date">{newsPage?.date}</div>
                <div className="newspage_img"><img className='newspage_img' src={newsPage?.img} alt="" /></div>
                <div className="newspage_dicription">
                    <p>{newsPage?.discription}</p>
                </div>
            </div>
            <div className="newscolumn">
                <div className="newscolumn_title">Последние новости</div>
                {news?.map((data, index) => {
                    return <NewsCard key={index} id={data.id} newsDate={data.date} newsTitle={data.title} newsImg={data.img} newsDiscription={data.discription} />
                }).slice(0, 2)}
                <Link className='newscolumn_link' to="/global">Все новости</Link>
            </div>

        </div>
    );
};

export default NewsPage;