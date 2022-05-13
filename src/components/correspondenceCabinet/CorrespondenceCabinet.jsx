import React from 'react';
import './CorrespondenceCabinet.css'
import Crsp_work from './crsp_work/Crsp_work';

const CorrespondenceCabinet = () => {
    return (
        <div className='crsp_wrapper'>
            <div className="crsp_cabinet">
                <div className='сrsp_title'><h1>Личный кабинет</h1></div>
                <div className="user__data-title"><h2>Данные пользователя</h2></div>
                <div className="crsp_blockOne">
                    <div className="crsp_infoblock">
                        <div className="infoblock_user__data">
                            <div className="user__data-item">Имя:ВАня</div>
                            <div className="user__data-item">Фамилия:DF</div>
                            <div className="user__data-item">Отчество:sadsad</div>
                            <div className="user__data-item">Дата рождения:fsasadasd</div>
                            <div className="user__data-item">Школа:dfdsfsdf</div>
                            <div className="user__data-item">Кружок:safasfas</div>
                            <div className="user__data-item">Email:safasfas</div>
                            <div className="user__data-item">Пароль:safasfas</div>
                        </div>
                        <div className="infoblock_btns">
                            <button className='infoblock_update'>Изменить данные</button>
                            <button className='infoblock_delete'>Удалить профиль</button>
                        </div>
                    </div>
                    <div className="crsp_btns">
                        <button className='crsp_download'>ЗАГРУЗИТЬ</button>
                        <div className="crsp_btns-title">Ваша работа:</div>
                        <div className="crsp_work"><Crsp_work /></div>
                    </div>
                </div>
                <div className="crsp_blockSecond">
                    <div className="blockSecond_title">Ваша рецензия:</div>
                    <div className="blockSecond_discription">Здесь пока пусто...</div>
                </div>
            </div>
        </div>
    );
};

export default CorrespondenceCabinet;