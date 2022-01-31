import styled from 'styled-components'

export const Number = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  max-width: 224px;
  overflow-x: auto;
  color: #0079ff;

  @media (max-width: 560px) {
    max-width: 194px;
  }

  @media (max-width: 420px) {
    font-size: 24px;
    max-width: 150px;
  }
`
export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  color: #1e2a32;

  @media (max-width: 420px) {
    font-size: 18px;
  }
`

export const MonthlyAmountSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 8px;
  height: 155px;
  margin-top: 24px;
`

export const Heading = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;
  height: 83px;

  @media (max-width: 420px) {
    padding: 0 24px;
  }
`

export const WrapperDescription = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  background-color: #f4f8fa;
  height: 83px;
  border-radius: 0 0 8px 8px;
`

export const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  span {
    font-weight: 600;
  }

  @media (max-width: 420px) {
    text-align: center;
  }
`
