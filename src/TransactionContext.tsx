import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface ITransactionsProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type IPostNewTransactionProps = Omit<ITransactionsProps, "id" | "createdAt">;

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionContextProps {
  transactions: ITransactionsProps[];
  postNewTransaction: (IPostNewTransactionProps) => Promise<void>;
}

export const TransactionContext = createContext<ITransactionContextProps>(
  {} as ITransactionContextProps
);

export function TransactionProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionsProps[]>([]);

  useEffect(() => {
    api
      .get("transaction")
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function postNewTransaction(
    transactionInput: IPostNewTransactionProps
  ) {
    const response = await api.post("/transaction", {
      ...transactionInput,
      createdAt: new Date()
    });


    setTransactions([...transactions, response.data])
  }

  return (
    <TransactionContext.Provider value={{ transactions, postNewTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
