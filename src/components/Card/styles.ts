import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 560px;
  height: 511px;
  margin-top: 24px;
  padding: 35px 40px 40px;
  border-radius: 8px;
  box-shadow: 0px 16px 32px 0px #1e2a3214;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const Heading = styled.div`
  padding-left: 16px;

  h2 {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    color: #1e2a32;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #708797;
    margin-top: 4px;
  }
`
