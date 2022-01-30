import React, { useState, useCallback } from 'react'
import * as S from './styles'

import { currency } from 'utils/currencyMask'

const TotalAmountInput = () => {
  const [amount, setAmount] = useState('')

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setAmount(currency(e).currentTarget.value)
  }, [])

  return (
    <S.TotalAmountInput>
      <label htmlFor="total-amount">Total amount</label>
      <S.Input
        type="text"
        inputMode="decimal"
        id="total-amount"
        name="total-amount"
        value={amount}
        onChange={handleChange}
      />
    </S.TotalAmountInput>
  )
}

export default TotalAmountInput
