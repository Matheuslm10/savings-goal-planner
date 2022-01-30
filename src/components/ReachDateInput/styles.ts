import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  height: 56px;
  width: 192px;
  margin-top: 4px;
  padding: 0 20px;
  color: #4d6475;

  button {
    border: 0;
    background: none;
    appearance: none;
    width: 24px;
    height: 34px;
  }

  @media (max-width: 560px) {
    width: 100%;
    padding: 0 12px;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Month = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #1e2a32;

  @media (max-width: 420px) {
    font-size: 14px;
  }
`

export const Year = styled.div`
  font-style: normal;
  font-size: 16px;
  margin-top: 4px;
  color: #708797;

  @media (max-width: 420px) {
    font-size: 14px;
  }
`

export const ReachDateInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 28px;

  label {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;

    @media (max-width: 420px) {
      font-size: 12px;
    }
  }

  @media (max-width: 560px) {
    margin-left: 0;
    margin-top: 16px;
  }
`
