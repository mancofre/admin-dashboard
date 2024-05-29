import React from 'react';


const NavMessage = () => {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href='/' data-bs-toggle='dropdown'>
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          Tienes 3 mensajes
          <a href='/'>
            <span className='badge rouded-pill bg-primary p-2 ms-2'>
              Ver todos
            </span>
          </a>
        </li>


        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li className='message-item'>
            <a href='/'>
              <img src='assets/img/Goku.jfif' alt='' className='rounded-circle'/>             
            
              <div>
                  <h4>Gaspar Mercado</h4>
                  <p>Este es el mensaje de Gaspar..</p>
                  <p>30 min. ago</p>
              </div>
            </a>
       </li>

        <li>
            <hr className='dropdown-divider'/>
        </li>

        <li className='message-item'>            
            <a href='/'>
              <img src='assets/img/vegeta.jfif' alt='' className='rounded-circle'/>
                          
              <div>
                  <h4>Lucas Mercado</h4>
                  <p>Este es el mensaje de Lucas..</p>
                  <p>30 min. ago</p>
              </div>
            </a>
       </li>


      </ul>

    </li>
  )
}

export default NavMessage