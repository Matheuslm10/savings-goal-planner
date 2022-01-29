import React from 'react'
import * as S from './styles'

const MonthlyAmountSection = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Monthly amount</S.Title>
        <S.Number>0.00</S.Number>
      </S.Container>
      <S.Description>
        <p>
          You&apos;re planning 1 monthly deposit to reach your $0.00 goal by
          February 2022.
        </p>
      </S.Description>
    </S.Wrapper>
  )
}

export default MonthlyAmountSection
