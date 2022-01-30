import React from 'react'
import * as S from './styles'

const MonthlyAmountSection = () => {
  return (
    <S.MonthlyAmountSection>
      <S.Heading>
        <S.Title>Monthly amount</S.Title>
        <S.Number>$0.00</S.Number>
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
