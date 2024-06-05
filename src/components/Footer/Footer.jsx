import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
        <div className='copyright'> 
            &copy; Copyright{' '}
            <strong>
                <span>
                    M. M. Technology
                </span>
            </strong>
            . All Rights Reserved
        </div>
        <div className='credits'>
            Designed by <a href='/'>Manuel Mercado Cofre</a>
        </div>

    </footer>
  )
}

export default Footer