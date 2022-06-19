import styled from "styled-components";
import ImagemFundo from './components/./img/background.jpg'


export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  width: 100%;
  background-image: url(${ImagemFundo});
  color: #Ed4e45;
  @media screen and (min-width : 320px) and (max-width : 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const CardInContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const CardConteiner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const FilterContainer = styled.div`
  margin-top: 100px;
  margin-left: 10px;
  @media screen and (min-width : 320px) and (max-width : 480px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 50px;
    margin-bottom: 100px;
  }
`
export const QuantSection = styled.section`
  text-align: center;
  display: block;
  background-color: rgb(73, 186, 181, 0.3);
  padding: 5px;
  color: #Ed4e45;
`
export const ButtonCard = styled.button`
  padding: 10px;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  background-color: #c3887d;
  box-shadow: 2px 2px 2px 1px rgb(69, 156, 237, 0.2);
  border: none;
  font-size: large;
  
  &:hover {
  cursor: pointer;
  transition: 0.3s;
  transform: scale(1.1);
  border-radius: 10px;
  text-shadow: 1px -1px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey,
    1px -4px 0 grey, 1px -5px 0 grey, 1px -6px 0 grey, 1px -7px 0 grey,
  }
`
export const Footer = styled.div`
  background-color: rgb(73, 186, 181, 0.5);
  height: 11rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width : 320px) and (max-width : 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const DivRedes = styled.div`
    padding-right: 2%;
    width: 10%;
    cursor: pointer;
    display: flex;
  img{
	width: 100%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  @media screen and (min-width : 320px) and (max-width : 480px) {
    font-size: 0.5rem;
    width: 80%;
  }
`
export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3%;
  padding-top: 1%;
  width: 100%;
  background-color: rgb(73, 186, 181, 0.5);
  @media screen and (min-width : 320px) and (max-width : 480px) {
    text-align: center;
  }
  `
export const Desenvolvimento = styled.div`
  display: flex;
  p {
    font-weight: bold;
  }
`