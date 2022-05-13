import React, { useState } from 'react';

import './Tabs.css'

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="tabs">
            <div className={toggleState === 1 ? "Tab Tab_active" : "Tab"} onClick={() => toggleTab(1)}>
                <div className="buuble"></div>
                <div className="title">5-6 классы</div>
            </div>
            <div className={toggleState === 2 ? "Tab Tab_active" : "Tab"} onClick={() => toggleTab(2)}>
                <div className="buuble"></div>
                <div className="title">7 классы</div>
            </div>
            <div className={toggleState === 3 ? "Tab Tab_active" : "Tab"} onClick={() => toggleTab(3)}>
                <div className="buuble"></div>
                <div className="title">8-9 классы</div>
            </div>
            <div className={toggleState === 4 ? "Tab Tab_active" : "Tab"} onClick={() => toggleTab(4)}>
                <div className="buuble"></div>
                <div className="title">10-11 классы</div>
            </div>
        </div>
    );
};

export default Tabs;