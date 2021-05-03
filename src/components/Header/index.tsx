import { Container, Content } from "./style";
import logoSvg from "../../assets/logo.svg";

interface IHeaderProps {
  openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="logo" />
        <button type="button" onClick={openNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
