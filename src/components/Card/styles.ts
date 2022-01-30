import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  max-width: 560px;
  margin-top: 24px;
  padding: 35px 40px 40px;
  border-radius: 8px;
  box-shadow: 0px 16px 32px 0px #1e2a3214;

  @media (max-width: 560px) {
    width: 100%;
    padding: 24px 24px 40px;
  }
`

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 560px) {
    flex-direction: column;
  }
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

    @media (max-width: 560px) {
      margin-top: 7px;
      font-size: 20px;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #708797;
    margin-top: 4px;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`
