import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 48px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    color: #1b31a8;

    @media (max-width: 420px) {
      margin-top: 32px;
      font-size: 18px;
    }

    span {
      font-weight: 600;
    }
  }
`
