import Menu from 'Componentes/Menu'
import styles from './Recibo.module.css'

export default function PaginaDeRecibo({ status, card }) {

  const cartao = card.card;
  console.log(cartao)

  const verificacao = status.success && cartao.card_number === '1111111111111111'? 'O pagamento foi concluído com sucesso':'O pagamento não foi concluído com sucesso';
  const resultado = document.querySelector('o');
  console.log(resultado);
  return (
    <section>
      <Menu>
        Recibo de Pagamento
      </Menu>
      <div>
        <p className={styles.resultado}>{verificacao}</p>
      </div>
    </section>
  )
}
