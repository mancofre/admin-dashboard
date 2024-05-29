import React from 'react';
import profileImg from '../../images/yo.jpeg'


export const NavAvatar = () => {
  return (
    <li className='nav-item dropdown pe-3'>
      <a className='nav-link nav-profile d-flex align-items-center pe-0' href='/' data-bs-toggle='dropdown'>
        <img src={profileImg} alt='Profile' className='rounded-circle'/>
        <span className='d-done d-md-block dropdown-toggle ps-2'>Manuel M.</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>Manuel</h6>
          <span>Desarrollador</span>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li>
          <a className='dropdown-item  d-flex align-items-center' href='/'>
            <i className='bi bi-person'></i>
            <span>Mi perfil</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li>
          <a className='dropdown-item  d-flex align-items-center' href='/'>
            <i className='bi bi-gear'></i>
            <span>Configuración</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li>
          <a className='dropdown-item  d-flex align-items-center' href='/'>
            <i className='bi bi-question-circle'></i>
            <span>Ayuda?</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li>
          <a className='dropdown-item  d-flex align-items-center' href='/'>
            <i className='bi bi-box-arrow-right'></i>
            <span>Cerrar Sesion</span>
          </a>
        </li>

      </ul>
    </li>
  )
}

export default NavAvatar
