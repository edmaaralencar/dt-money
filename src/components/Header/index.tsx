import * as S from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "../../assets/logo.svg";
import NewTransactionModal from "../NewTransactionModal";

function Header() {
  return (
    <S.Wrapper>
      <S.HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.Wrapper>
  );
}

export default Header;
