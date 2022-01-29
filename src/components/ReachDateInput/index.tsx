import React from 'react'
import * as S from './styles'

const ReachDateInput = () => {
  return (
    <S.Container>
      <label htmlFor="reach-date">Reach goal by</label>
      <S.Input id="reach-date" name="reach-date" />
    </S.Container>
  )
}

export default ReachDateInput
