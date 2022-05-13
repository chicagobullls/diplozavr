import React from 'react';
import mapLogo from '../../utiles/map.jpg'
import './Howtoget.css'

const Howtoget = () => {
    return (
        <div className='Container'>
            <div className="main_wrapper">
                <div className="global_title">Контакты и проезд</div>
                <div className="contacts">
                    <span>На все вопросы ответит</span>
                    <span>Гаврюшкина Ольга Александровна: Тел. 8-913-782-15-21</span>
                    <span>E-mail:<a href="sib.olympic@gmail.com">sib.olympic@gmail.com</a></span>
                </div>
                <div className="title2">Как добраться?</div>
                <div className="discription">
                    <p ><span>Традиционно Сибирская геологическая олимпиада школьников проводится в новосибирском Академгородке.</span></p>
                    <p><span>Открытие Олимпиады и первый этап очного конкурса проходят в Институте геологии и минералогии СО РАН (проспект академика Коптюга 3). Второй этап очного конкурса и награждение победителей проходят в новом корпусе Новосибирского государственного университета (ул. Пирогова 1).</span></p>
                    <p ><span>От ж/д вокзала "Новосибирск-Главный" до Академгородка (остановка "Цветной проезд") проще всего добраться на автобусе №8.</span></p>
                    <p ><span>От метро "Речной вокзал" до Академгородка (остановка "Цветной проезд") проще всего добраться на автобусе №35</span></p>
                </div>
                <div className="map_image"><img src={mapLogo} alt="" /></div>
            </div>
        </div>

    );
};

export default Howtoget;