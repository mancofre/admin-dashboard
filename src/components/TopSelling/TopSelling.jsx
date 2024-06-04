import React, { useState, useEffect } from 'react'
import './topSelling.css';
import CardFilter from '../Dashboard/CardFilter/CardFilter';
import TopSellingItem from './TopSellingItem';

const TopSelling = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter =>{
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://192.168.1.4:4000/topselling')
          .then(res => res.json())
          .then(data => {
            setItems(data);
          })
          .catch(e => console.log(e.message));
      };
    
      useEffect(()=>{
        fetchData();
      },[]);

  return (
    <div className='card top-selling overflow-auto'> 
        <CardFilter filterChange={handleFilterChange}/>
        <div className='card-body'>
            <h5 className='card-title'>
                Top Selling <span>| {filter}</span>
            </h5>

            <table className='table table-borderless datatable'>
                <thead className='table-light'>
                    <tr>
                        <td scope='col'>Preview</td>
                        <td scope='col'>Product</td>
                        <td scope='col'>Price</td>
                        <td scope='col'>Sold</td>
                        <td scope='col'>Revenue</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        items &&
                        items.length > 0 &&
                        items.map(item => <TopSellingItem item={item} key={item._id}/>)
                    }
                </tbody>
            </table>
            
        </div>
    </div>
  )
}

export default TopSelling