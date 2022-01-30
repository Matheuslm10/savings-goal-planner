import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 56px;
  height: 80px;
  background-color: #ffffff;

  @media (max-width: 560px) {
    padding-left: 16px;
    height: 56px;

    svg {
      width: 75px;
      height: 24px;
    }
  }
`
