import React from 'react';

const ExpertCabinet = () => {
    return (
        <div className='expert_wrapper'>
            <div className="expert_container">
                <div className="expert_information">
                    <div className="expert_information-data">
                        <div className="ex_i-data__items">Email:</div>
                        <div className="ex_i-data__items">Пароль:</div>
                    </div>
                    <div className="expert_information-btns"></div>
                </div>
                <div className="expert_rate"></div>
                <div className="expert_table"></div>
            </div>
        </div>
    );
};

export default ExpertCabinet;