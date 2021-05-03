import { Summary } from '../Summary'
import { TransactionTable } from '../transactionTable'
import { Container } from './style'

export function DashBoard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}
