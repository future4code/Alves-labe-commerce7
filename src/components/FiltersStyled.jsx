import styled from "styled-components";
import Imagem from './img/background.jpg'

export const Filtro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url(${Imagem});
  height: 7rem;
  color: #c3887d;
  font-weight: bold;
`
export const Form = styled.label`
  padding-top: 20px;
  padding-bottom: 20px;

`
export const Inputs = styled.input`
  background: transparent;
  padding: 5px;
  color: #Ed4e45;
`
export const Select = styled.select`
  padding: 5px;
`