import React, { useCallback } from 'react'
import * as S from './styles'
import CurrencyInput from 'react-currency-input-field'

import { useAmount } from 'hooks/use-amount'

const TotalAmountInput = () => {
  const { updateAmount } = useAmount()

  const handleChange = useCallback(
    (value) => {
      updateAmount(value)
    },
    [updateAmount]
  )

  return (
    <S.TotalAmountInput>
      <label htmlFor="total-amount">Total amount</label>
      <CurrencyInput
        id="total-amount"
        name="total-amount"
        decimalsLimit={2}
        decimalSeparator="."
        groupSeparator=","
        onValueChange={handleChange}
      />
    </S.TotalAmountInput>
  )
}

export default TotalAmountInput
