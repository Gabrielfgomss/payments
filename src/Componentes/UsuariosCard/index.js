import Usuario from 'Componentes/Usuario';
import styles from './Usuarios.module.css';

export default function UsuariosCard({ usuarios }) {

  return (
    <div className={styles.cards}>
      {usuarios.map((usuario) => {
        return (
          <div
            className={styles.cards}
            key={usuario.id}>
            <Usuario usuario={usuario} style={styles.cards} />
          </div>
        )
      })
      }
    </div >
  )
}
