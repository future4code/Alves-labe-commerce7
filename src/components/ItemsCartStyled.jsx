import styled from "styled-components";

export const Itens = styled.div`
  svg {
    color: red;
    font-size: 1rem;
    background: transparent;
    @media screen and (min-width : 320px) and (max-width : 480px) {
    font-size: 0.5rem;
  }
  }

  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  border-bottom:solid 1px;
  border-top:solid 1px;

`