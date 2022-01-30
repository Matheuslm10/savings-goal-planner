import React, { useState } from 'react'
import * as S from './styles'
import moment from 'moment'

import { ReactComponent as LeftArrowIcon } from 'assets/icons/left-arrow.svg'
import { ReactComponent as RightArrowIcon } from 'assets/icons/right-arrow.svg'

const getNextMonthFromTheCurrent = () => {
  return moment()
    .add(1, 'month')
    .toDate()
    .toLocaleString('en-us', { month: 'long' })
}

const ReachDateInput = () => {
  const [month] = useState(getNextMonthFromTheCurrent())

  return (
    <S.ReachDateInput>
      <label htmlFor="reach-date">Reach goal by</label>
      <S.Container id="reach-date" role="input">
        <button>
          <LeftArrowIcon />
        </button>
        <S.Text>
          <S.Month data-testid="month">{month}</S.Month>
          <S.Year data-testid="year">2022</S.Year>
        </S.Text>
        <button>
          <RightArrowIcon />
        </button>
      </S.Container>
    </S.ReachDateInput>
  )
}

export default ReachDateInput
