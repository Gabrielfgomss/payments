import Menu from 'Componentes/Menu'
import { useEffect, useState } from 'react';
import styles from './Recibo.module.css'

export default function PaginaDeRecibo({ info }) {

  const data = info || '';

  console.log(data)

  const [response, setResponse] = useState('Carregando...');

  useEffect(() => {
    fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {
      method: "POST",
      body: JSON.stringify({
        card_number: data.card_number,
        cvv: data.cvv,
        expiry_date: data.expiry_date,
        destination_user_id: data.id,
        value: data.value
      })
    }).then(raw => raw.json())
      .then(() => {
        if (data.card_number === '1111111111111111') {
          setResponse('O pagamento foi concluído com sucesso')
        } else if (data.card_number === '4111111111111234') {
          throw Error()
        }
      }).catch(() => setResponse('O pagamento não foi concluído com sucesso'))
  }, [])

  return (
    <section>
      <Menu>
        Recibo de Pagamento
      </Menu>
      <div>
        <p className={styles.resultado}>{response}</p>
      </div>
    </section>
  )
}
