import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './style'

export function TransactionTable() {
  useEffect(() => {
    api.get('transaction').then((response) => console.log(response.data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/05/2019</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$2.000,00</td>
            <td>Casa</td>
            <td>18/05/2019</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
