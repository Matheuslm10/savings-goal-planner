import React from 'react'
import * as S from './styles'

import { useSavingsGoal } from 'hooks/use-savings-goal'
import { formatValue } from 'react-currency-input-field'

const getMonthName = (date: Date | null) => {
  return date?.toLocaleString('en-us', { month: 'long' })
}

const MonthlyAmountSection = () => {
  const { amount, reachDate, numberOfDeposits, monthlyAmount } =
    useSavingsGoal()

  const mask = (value: number) => {
    return formatValue({
      value: value?.toString() || '',
      groupSeparator: ',',
      decimalSeparator: '.',
      prefix: '$',
      decimalScale: 2,
    })
  }

  const isPlural = () => {
    return numberOfDeposits > 1 ? 's' : ''
  }

  return (
    <S.MonthlyAmountSection>
      <S.Heading>
        <S.Title>Monthly amount</S.Title>
        <S.Number data-testid="monthly-amount">{mask(monthlyAmount)}</S.Number>
      </S.Heading>
      <S.WrapperDescription>
        <S.Description data-testid="description">
          You&apos;re planning{' '}
          <span>
            {numberOfDeposits} monthly deposit{isPlural()}
          </span>{' '}
          to reach your <span>{mask(amount)}</span> goal by{' '}
          <span>
            {getMonthName(reachDate)} {reachDate?.getFullYear()}.
          </span>
        </S.Description>
      </S.WrapperDescription>
    </S.MonthlyAmountSection>
  )
}

export default MonthlyAmountSection
