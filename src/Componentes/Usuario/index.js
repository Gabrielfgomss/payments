import styles from './Usuario.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Usuario({ usuario }) {
    return (
        <ul className={styles.card}>
            <li>
                <img src={usuario.img} alt='Foto do usuário' />
            </li>
            <li>
                Nome: {usuario.name}
            </li>
            <li>
                Usuário: {usuario.username}
            </li>
            <Link to={`/pagamentos/${usuario.id}`}>
                <button className={styles.botao}>Pagar</button>
            </Link>
        </ul>
    )
}
