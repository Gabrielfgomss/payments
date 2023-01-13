import style from './Menu.module.css'
import React from 'react';
import MenuLink from 'Componentes/MenuLink';
import { Outlet } from 'react-router-dom';

export default function Menu({ to, children }) {
  return (
    <div>
      <header className={style.container}>
        <nav className={style.navegador}>
          <MenuLink to={to}>
          </MenuLink>
          <h2 className={style.tituloPagamento}>{children}</h2>
        </nav>
      </header >
      <Outlet />
    </div>
  )
}
