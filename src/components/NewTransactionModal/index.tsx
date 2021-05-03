import Modal from 'react-modal'
import { Content, TransactionTypeContainer, RadioBox } from './style'
import Close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean
  setNewTransactionModalClose: () => void
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  setNewTransactionModalClose,
}: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState('deposit')

  function cancelClosing(event) {
    event.preventDefault()
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
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <RadioBox
            onClick={(e) => {
              setTypeTransaction('deposit')
              cancelClosing(e)
            }}
            isActive={typeTransaction == 'deposit'}
          >
            <img src={income} alt="entradas" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={(e) => {
              setTypeTransaction('withdraw')
              cancelClosing(e)
            }}
            isActive={typeTransaction == 'withdraw'}
          >
            <img src={outcome} alt="saidas" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Content>
    </Modal>
  )
}
