import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  width: 100%;

  label {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;

    @media (max-width: 420px) {
      font-size: 12px;
    }
  }

  @media (max-width: 420px) {
    margin-top: 20px;
  }
`

export const Input = styled.input`
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  height: 56px;
  width: 100%;
  margin-top: 4px;
  padding: 0 13px 0 44px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #4d6475;
  /* The icon can be found in 'assets/icons/dollar-sign.svg', here it has been URL-enconded to be used as background-image. */
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 0a1 1 0 0 1 1 1v22a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1z' fill='%23CBD5DC'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.318 5.318A4.5 4.5 0 0 1 9.5 4H17a1 1 0 1 1 0 2H9.5a2.5 2.5 0 1 0 0 5h5a4.5 4.5 0 1 1 0 9H6a1 1 0 1 1 0-2h8.5a2.5 2.5 0 0 0 0-5h-5a4.5 4.5 0 0 1-3.182-7.682z' fill='%23CBD5DC'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 13px center;

  /* Removes spinners buttons in Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Removes spinners buttons in Firefox */
  -moz-appearance: textfield;

  @media (max-width: 420px) {
    font-size: 20px;
  }
`
