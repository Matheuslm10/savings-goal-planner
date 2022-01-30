import React from 'react'
import * as S from './styles'

import { ReactComponent as BuyAHouseIcon } from 'assets/icons/goals/buy-a-house.svg'

import ConfirmButton from 'components/ConfirmButton'
import MonthlyAmoutSection from 'components/MonthlyAmoutSection'
import ReachDateInput from 'components/ReachDateInput'
import TotalAmoutInput from 'components/TotalAmountInput'

const Card = () => {
  return (
    <S.Card>
      <S.HeadingContainer>
        <BuyAHouseIcon />
        <S.Heading>
          <h2>Buy a house</h2>
          <p>Saving goal</p>
        </S.Heading>
      </S.HeadingContainer>
      <S.InputsContainer>
        <TotalAmoutInput />
        <ReachDateInput />
      </S.InputsContainer>
      <MonthlyAmoutSection />
      <ConfirmButton />
    </S.Card>
  )
}

export default Card
