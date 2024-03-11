import React, { useState } from 'react';
import Header from "./Header";
import Direct from './Direct';
import Fresh from './Fresh';
import Ambient from './Ambient';

function HomePage() {
    const [activeTab, setActiveTab] = useState('Ambient'); // Initialize activeTab with 'Ambient'

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getTabStyle = (tab) => {
        return activeTab === tab ? {
            backgroundColor: '#06CBE4',
            color: 'white',
            borderRadius: '5px'
        } : {};
    };

    return (
        <>
            <Header />
            <h1 className='flex justify-center font-bold text-sky-400 text-3xl'>FORECAST DASHBOARD</h1>
            <br />
            <br />
            <div className='flex justify-center text-sm font-medium text-center text-sky-500'>
                <div className="me-2" style={getTabStyle('Ambient')}>
                    <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-sky-100" onClick={() => handleTabClick('Ambient')}>Ambient</button>
                </div>
                
                <div className="me-2" style={getTabStyle('Fresh')}>
                    <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-sky-100" onClick={() => handleTabClick('Fresh')}>Fresh</button>
                </div>

                <div className="me-2" style={getTabStyle('Direct')}>
                    <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-sky-100" onClick={() => handleTabClick('Direct')}>Direct</button>
                </div>
            </div>

            <div>
                {activeTab === 'Ambient' && <Ambient />}               
                {activeTab === 'Fresh' && <Fresh />}
                {activeTab === 'Direct' && <Direct />}
            </div>
        </>
    );
}

export default HomePage;
