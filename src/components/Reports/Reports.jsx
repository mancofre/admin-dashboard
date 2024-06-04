import React, { useState } from 'react'
import CardFilter from '../Dashboard/CardFilter/CardFilter'
import ReportCharts from '../ReportCharts/ReportCharts';

const Reports = () => {
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter =>{
        setFilter(filter);
    }

  return (
    <div className='card'>
        <CardFilter filterChange={handleFilterChange} />
        <div className='card-body'>
            <div className='card-title'>
                Reports <span>/{filter}</span>
            </div>
            <ReportCharts />
        </div>
    </div>
  )
}

export default Reports