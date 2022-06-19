import styled from "styled-components";

export const ContainerDepositions = styled.div`
    color: #424c54;
    background-color: rgb(73, 186, 181, 0.3) ;
 
`
export const ContainerFlexDepositions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (min-width : 320px) and (max-width : 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const TitleDepositions = styled.h1`
  text-align: center;
 padding: 1rem;
`
export const CardDepositions = styled.div`
  display: flex;
  border: 1px solid rgb(237, 78, 69, 0.5);
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  border-radius: 10px;
  width: 30%;
  align-items: center;
  margin-bottom: 5px;
  img {
    border-radius: 50%;
    height: 70px;
    min-width: 80px;
    border: 3px dotted #49bab5 ;
    padding: 2px;
    margin: 2px;
  }
  &:hover{
    box-shadow: 
      3px 3px 6px #ccc,
      -6px -6px 3px #333,
      -9px 9px 7px #555,
      12px -12px 7px #444
  }
  @media screen and (min-width : 320px) and (max-width : 480px) {
    width: 98%;
  }
`

export const TextDepositions = styled.text`
  text-align: start;
  padding: 2px;
`