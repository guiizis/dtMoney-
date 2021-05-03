import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { Content } from './style'

export function Summary() {
  return (
    <Content>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="income" />
        </header>
        <strong> R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="outcome" />
        </header>
        <strong> R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="income" />
        </header>
        <strong> R$9500,00</strong>
      </div>
    </Content>
  )
}
