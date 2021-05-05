import React, { useState } from 'react'
import { DashBoard } from './components/dashBoard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/globalStyles'
import { createServer, Model } from 'miragejs'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionContext, TransactionProvider } from './TransactionContext'

Modal.setAppElement('#root')

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de WebSite',
          amount: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date('2021-02-15'),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1200,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-02-20'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transaction', (schema, request) => {
      return schema.all('transaction')
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      schema.create('transaction', data)

      return data
    })
  },
})

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  )

  function setNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true)
  }
  function setNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header openNewTransactionModal={setNewTransactionModalOpen} />
      <DashBoard />
      <GlobalStyle />
      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        setNewTransactionModalClose={setNewTransactionModalClose}
      />
    </TransactionProvider>
  )
}
export default App
