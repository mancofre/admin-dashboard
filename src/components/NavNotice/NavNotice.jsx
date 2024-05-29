import React from 'react';


const NavNotice = () => {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href='/' data-bs-toggle='dropdown'>
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
                Tienes 4 notificaciones
                <a href='/'> 
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        Ver todos
                    </span>
                </a>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notifications-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>Lorem ipsum</h4>
                    <p>Este es el parrafo de esta seccion</p>
                    <p>30 min. ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='notifications-item'>
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>Lorem ipsum</h4>
                    <p>Este es el parrafo de esta seccion</p>
                    <p>30 min. ago</p>
                </div>
            </li>


        </ul>
    </li>
  )
}

export default NavNotice