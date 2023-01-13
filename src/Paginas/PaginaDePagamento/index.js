import Menu from 'Componentes/Menu';
import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styles from './Pagamento.module.css';

export default function PaginaDePagamento({ usuarios, payInforms }) {

  const [value, setValue] = useState('');

  let cartoes = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ]

  const [cartao, setCartao] = useState(cartoes[0]);

  const parametros = useParams();

  var usuario = usuarios.filter((usuario) => usuario.id === Number(parametros.id))[0] || {};


  function maskValor(event) {
    const onlyDigits = event.target.value
      // Transformando a String digitada em uma Array
      .split("")
      // Filtrando a Array e pegando apenas o que for digito
      .filter(s => /\d/.test(s))
      //Juntando tudo na Array em uma String
      .join("")
      // Adicionado os zeros
      .padStart(3, "0");
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
    event.target.value = maskCurrency(digitsFloat);
  }

  function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(valor)
  }

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    payInforms({
      card: cartao,
      value: value
    })
    setValue('');
    navigate('/recibo')
  }

  /*const payload = () => {
    evento.preventDefault();
    payInforms({
      card: cartao,
      value: value
    })
    setValue('');
    setCartao('')
  }*/

  /*const formik = useFormik({
    initialValues: {
      card: {},
      value: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })*/


  return (
    <div>
      <Menu>
        {`Pagamento para ${usuario.name}`}
      </Menu>
      <form 
        className={styles.formulario} 
        onSubmit={handleSubmit}>
        <input
          type='text'
          name='type-value'
          className={styles.input}
          placeholder='R$ 0,00'
          value={value}
          //value={formik.values.value}
          onChange={value => setValue(value.target.value)}
          //onChange={formik.handleChange}
          onInput={evento => maskValor(evento)}
          required
        >
        </input>
        <select
          className={styles.input}
          name='select-card'
          onChange={value => setCartao(JSON.parse(value.target.value))}
          //onChange={formik.handleChange}
        >
          {cartoes.map(card =>
            <option key={card.cvv} value={JSON.stringify(card)}>
              {`Cartão com o final ${card.card_number.slice(-4)}`}
            </option>
          )
          }
        </select>
        <div className={styles.botaoContainer}>

          <button className={`
              ${styles.input}
              ${styles.botao}`
          }>
            Pagar
          </button>

        </div>
      </form>
    </div>
  )
}

/*export async function action({request}) {
  const formData = await request.formData();
  const post = {
    value: formData.get('type-value'),
    card: formData.get('select-card')
  }
}*/