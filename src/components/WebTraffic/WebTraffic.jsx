import React, { useState } from 'react';
import CardFilter from '../Dashboard/CardFilter/CardFilter';
import WebTrafficChart from './WebTrafficChart';

const WebTraffic = () => {

    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter =>{
        setFilter(filter);
    }

  return (
    <div className='card'> 
        <CardFilter filterChange={handleFilterChange}/>
        <div className='card-body pb-0'>
            <h5 className='card-title'>
                Budget Report <span>| {filter}</span>
            </h5>           
            <WebTrafficChart />
        </div>
    </div>
  )
}

export default WebTraffic