import React from 'react'
import * as S from './styles'

import { useAmount } from 'hooks/use-amount'
import { formatValue } from 'react-currency-input-field'

const MonthlyAmountSection = () => {
  const { amount } = useAmount()

  const mask = (value: number) => {
    return formatValue({
      value: value?.toString() || '',
      groupSeparator: ',',
      decimalSeparator: '.',
      prefix: '$',
    })
  }

  return (
    <S.MonthlyAmountSection>
      <S.Heading>
        <S.Title>Monthly amount</S.Title>
        <S.Number data-testid="monthly-amount">{mask(amount)}</S.Number>
      </S.Heading>
      <S.Description>
        <p>
          You&apos;re planning <span>1 monthly deposit</span> to reach your{' '}
          <span>$0.00</span> goal by <span>February 2022.</span>
        </p>
      </S.Description>
    </S.MonthlyAmountSection>
  )
}

export default MonthlyAmountSection
