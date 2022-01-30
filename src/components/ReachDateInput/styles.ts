import styled from 'styled-components'

export const Wrapper = styled.div`
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
`

export const Year = styled.div`
  font-style: normal;
  font-size: 16px;
  margin-top: 4px;
  color: #708797;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 28px;

  label {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
  }
`
