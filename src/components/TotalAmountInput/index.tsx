import React from 'react'
import * as S from './styles'

const TotalAmountInput = () => {
  return (
    <S.Container>
      <label htmlFor="total-amount">Total amount</label>
      <S.Input type="number" id="total-amount" name="total-amount" min="0" />
    </S.Container>
  )
}

export default TotalAmountInput
