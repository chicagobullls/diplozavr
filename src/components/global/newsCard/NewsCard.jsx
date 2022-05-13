import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css'

const NewsCard = ({ id, newsDate, newsTitle, newsImg, newsDiscription }) => {
    const [shortDiscr, setShortDiscr] = useState(newsDiscription.split(' ').slice(0, 50).join(' '))

    console.log('yyyyyyyy', shortDiscr)


    return (
        <Link to={`/newspage/${id}`} className='news_card' >
            <div className="newscard_date">{newsDate}</div>
            <div className="newsсard_title">{newsTitle}</div>
            <div className="newscard_image"><img className='newscard_img' src={newsImg} alt="" /></div>
            <div className="newscard_discription">{shortDiscr}...</div>
        </Link >
    );
};

export default NewsCard;