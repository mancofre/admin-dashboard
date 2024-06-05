import React, {useEffect, useState} from 'react';
import './dashboard.css';
import Card from '../Card/Card';
import Reports from '../Reports/Reports';
import RecentSales from '../RecentSales/RecentSales';
import TopSelling from '../TopSelling/TopSelling';
import RecentActibity from '../RecentActivity/RecentActivity';
import BudgetReport from '../BudgetReport/BudgetReport';
import WebTraffic from '../WebTraffic/WebTraffic';
import News from '../News/News';

const Dashboard = () => {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch('http://192.168.1.4:4000/cards')
      .then(res => res.json())
      .then(data => {
        setCards(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <section className='dashboard section'>
        <div className='row'>
            <div className='col-lg-8'>
                <div className='row'>
                  {
                    cards && cards.length > 0 &&
                    cards.map(card => <Card key={card._id} card={card} />)
                  }
                  <div className='col-12'>
                    <Reports />
                  </div>
                  <div className='col-12'>
                    <RecentSales />
                  </div>
                  <div className='col-12'>
                    <TopSelling />
                  </div>
                </div>
            </div>
            <div className='col-lg-4'>
                  <RecentActibity />
                  <BudgetReport />
                  <WebTraffic />
                  <News />
            </div>
        </div>
    </section>
  )
}

export default Dashboard