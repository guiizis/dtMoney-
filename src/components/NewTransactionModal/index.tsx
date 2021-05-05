import Modal from 'react-modal'
import { Content, TransactionTypeContainer, RadioBox } from './style'
import Close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react'

import { TransactionContext } from '../../TransactionContext'

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean
  setNewTransactionModalClose: () => void
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  setNewTransactionModalClose,
}: NewTransactionModalProps) {
  const { postNewTransaction } = useContext(TransactionContext)

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)

  function cancelClosing(event: FormEvent) {
    event.preventDefault()
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await postNewTransaction({
      title,
      amount,
      type,
      category,
    })

    setType('')
    setTitle('')
    setCategory('')
    setAmount(0)

    setNewTransactionModalClose()
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={setNewTransactionModalClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Content>
        <h2>Cadastrar Nova Transação</h2>
        <button
          type="button"
          className="react-modal-close"
          onClick={setNewTransactionModalClose}
        >
          <img src={Close} alt="botao para fechar o modal" />
        </button>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            onClick={(e) => {
              setType('deposit')
              cancelClosing(e)
            }}
            isActive={type == 'deposit'}
            activeColor="green"
          >
            <img src={income} alt="entradas" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={(e) => {
              setType('withdraw')
              cancelClosing(e)
            }}
            isActive={type == 'withdraw'}
            activeColor="red"
          >
            <img src={outcome} alt="saidas" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Cadastrar
        </button>
      </Content>
    </Modal>
  )
}
