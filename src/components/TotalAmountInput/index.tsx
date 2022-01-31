import React, { useCallback } from 'react'
import * as S from './styles'
import CurrencyInput from 'react-currency-input-field'

import { useSavingsGoal } from 'hooks/use-savings-goal'

const TotalAmountInput = () => {
  const { updateAmount } = useSavingsGoal()

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
        allowNegativeValue={false}
        onValueChange={handleChange}
      />
    </S.TotalAmountInput>
  )
}

export default TotalAmountInput
