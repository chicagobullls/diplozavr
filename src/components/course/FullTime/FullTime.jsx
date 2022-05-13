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
                                { title: 'lastname', field: 'lastname' },
                                { title: 'name', field: 'name' },
                                { title: 'patronomyc', field: 'patronomyc' },
                                { title: 'city', field: 'city' },
                                { title: 'Profile', field: 'Profile' },
                            ]}
                                data={
                                    [{ id: '1', lastname: 'Дергунов', name: 'Mehmet', patronomyc: 'Baran', city: 'PITER', Profile: "ЕНОТИК-АБРИКОСИК" }]
                                } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullTime;