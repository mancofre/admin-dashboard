import React from 'react';
import './sideBar.css';
import '../../data/navItem';
import navList from '../../data/navItem';
import NavItem from '../NavItem/NavItem';

const SideBar = () => {
  return (
    <aside id='sidebar' className='sidebar'> 
        <ul className="sidebar-nav" id='sidebar-nav'>
            <li className='nav-item'>
                <a className='nav-link' href='/'>
                    <i className='bi bi-grid'></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <li className='nav-item'>
                
                <a className='nav-link collapsed' data-bs-target='#components-nav' data-bs-toggle='collapse' href='/'>
                <i className='bi bi-menu-button-wide'></i>
                <span>Documentos</span>
                <i className='bi bi-chevron-down ms-auto'></i>
                </a>

                <ul id='components-nav' className='nav-content collapse' data-bs-parent='#sidebar-nav'>
                    <li>
                        <a href='/'>
                            <i className='bi bi-circle'></i>
                            <span>Clientes</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i className='bi bi-circle'></i>
                            <span>Proveedores</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i className='bi bi-circle'></i>
                            <span>Logistica</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#forms-nav' data-bs-toggle='collapse' href='/'>
                    <i className='bi bi-journal-text'></i>
                    <span>Forms</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>

                <ul id='forms-nav' className='nav-content collapse' data-bd-parent='#sidebar-nav'>
                    <li>
                        <a href='/'>
                            <i className='bi bi-circle'></i>
                            <span>Solicitud</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i className='bi bi-circle'></i>
                            <span>Lanzamiento</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i className='bi bi-circle'></i>
                            <span>Cancelación</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#tables-nav' data-bs-toggle='collapse' href='/'>
                    <i className='bi bi-journal-text'></i>
                    <span>Tables</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul id='tables-nav' className='nav-content collapse' data-bs-parent='#sidebar-nav'>
                    <li>
                        <a href='/'>
                            <i className='bi bi-circle'></i>
                            <span>Tablas General</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i className='bi bi-circle'></i>
                            <span>Tablas de datos</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='nav-heading'>Paginas</li>
            { 
                navList.map(nav=>(
                    <NavItem key={nav._id} nav={nav}/>
                ))
            }

        </ul>
    </aside>
  )
}

export default SideBar