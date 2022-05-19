import React from 'react';
import Table from '../../Table/Table';
import Tabs from '../Tabs/Tabs';
import './FullTime.css'
import FullTimeSidebar from './FullTimeSidebar/FullTimeSidebar';


const FullTime = () => {

    return (
        <div className='FullTime'>
            <div className="FullTime_container">
                <FullTimeSidebar />
                <div className="Fblock_wrapper">
                    <Tabs />
                    <div className="Fblock_table">
                        <div className="Fblock_material_table">
                            <Table columns={[
                                { title: 'id', field: 'id', type: 'numeric' },
                                { title: 'Фамилия', field: 'lastname' },
                                { title: 'Имя', field: 'name' },
                                { title: 'Отчество', field: 'patronomyc' },
                                { title: 'Город', field: 'city' },
                                { title: 'Кружок', field: 'Profile' },
                            ]}
                                data={
                                    [
                                        { id: '1', lastname: 'Астафьев ', name: 'Ярослав ', patronomyc: 'Янович', city: 'Новосибирск', Profile: "Геологический" },
                                        { id: '2', lastname: 'Касаткин ', name: 'Лев ', patronomyc: 'Александрович', city: 'Новосибирск', Profile: "Геологический" },
                                        { id: '3', lastname: 'Васильев ', name: 'Илья ', patronomyc: 'Матвеевич', city: 'Новосибирск', Profile: "Геологический" },
                                        { id: '4', lastname: 'Кузнецова ', name: 'Ксения ', patronomyc: 'Никитична', city: 'Новосибирск', Profile: "Геологический" },
                                        { id: '5', lastname: 'Лукьянов ', name: 'Иван ', patronomyc: 'Александрович', city: 'Новосибирск', Profile: "Геологический" },
                                    ]
                                } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullTime;