import React from 'react'
import * as S from './styles'

import { ReactComponent as BuyAHouseIcon } from 'assets/icons/goals/buy-a-house.svg'

import ConfirmButton from 'components/ConfirmButton'
import MonthlyAmoutSection from 'components/MonthlyAmoutSection'
import ReachDateInput from 'components/ReachDateInput'
import TotalAmoutInput from 'components/TotalAmountInput'

import { SavingsGoalProvider } from 'hooks/use-savings-goal'

const Card = () => {
  return (
    <S.Card>
      <S.HeadingWrapper>
        <BuyAHouseIcon />
        <S.Heading>
          <h2>Buy a house</h2>
          <p>Saving goal</p>
        </S.Heading>
      </S.HeadingWrapper>
      <SavingsGoalProvider>
        <S.InputsWrapper>
          <TotalAmoutInput />
          <ReachDateInput />
        </S.InputsWrapper>
        <MonthlyAmoutSection />
      </SavingsGoalProvider>
      <ConfirmButton />
    </S.Card>
  )
}

export default Card
