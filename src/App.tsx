import React, { useState } from "react";
import { DashBoard } from "./components/dashBoard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globalStyles";
import { createServer } from "miragejs";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transaction", () => [
      {
        id: 1,
        title: "Transaction 1",
        amount: 400,
        type: "Deposit",
        category: "Food",
        createdAt: new Date()
      }
    ]);
  }
});

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function setNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }
  function setNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header openNewTransactionModal={setNewTransactionModalOpen} />
      <DashBoard />
      <GlobalStyle />
      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        setNewTransactionModalClose={setNewTransactionModalClose}
      />
    </>
  );
}
export default App;
