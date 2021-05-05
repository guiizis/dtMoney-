import { useContext } from 'react'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionContext'
import { Content } from './style'

export function Summary() {
  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce((count, transaction) => {

    if (transaction.type == "deposit") {
      count.deposit += transaction.amount
      count.total += transaction.amount
    } else {
      count.withdraw += transaction.amount
      count.total -= transaction.amount
    }

    return count
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <Content>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="income" />
        </header>
        <strong>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposit)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="outcome" />
        </header>
        <strong>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="income" />
        </header>
        <strong>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Content>
  )
}
