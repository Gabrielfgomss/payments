import styles from './PaginaInicial.module.css';
import UsuariosCard from 'Componentes/UsuariosCard';
import Menu from 'Componentes/Menu';


export default function PaginaInicial({ usuarios }) {

  return (
    <div>
      <Menu>
      </Menu>
      <section className={styles.container}>
        <h1 className={styles.titulo}>Usuários: </h1>
        <UsuariosCard usuarios={usuarios}></UsuariosCard>
      </section>
    </div>
  )
}
