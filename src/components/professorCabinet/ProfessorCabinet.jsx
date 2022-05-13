import React from 'react';
import Table from '../Table/Table';
import './ProfessorCabinet.css'

const ProfessorCabinet = () => {
    return (
        <div className='pWrapper'>
            <div className="pContainer">
                <div className="pTitle">Личный кабинет</div>
                <div className="pBlockOne">
                    <div className="pInfo_Block">
                        <div className="pInfo_item">Имя: Александр</div>
                        <div className="pInfo_item">Отчество: Олегович</div>
                        <div className="pInfo_item">Фамилия: Христов</div>
                        <div className="pInfo_item">Школа: Школа №25</div>
                        <div className="pInfo_item">Кружок: Кружок Юных Енотиков</div>
                        <div className="pInfo_item">Email:Bigdom@gmail.ru</div>
                        <div className="pInfo_item">Пароль:****************</div>
                    </div>
                    <div className="pBtns_Block">
                        <button className='pDeleteBtn'>Удалить профиль</button>
                        <button className='pUpdateBtn'>Редактировать профиль</button>
                    </div>
                </div>
                <div className="pBlockSecond">
                    <Table />
                </div>

            </div>

        </div>
    );
};

export default ProfessorCabinet;