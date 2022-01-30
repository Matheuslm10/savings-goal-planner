import React, { useState } from 'react'
import * as S from './styles'
import moment from 'moment'

import { ReactComponent as LeftArrowIcon } from 'assets/icons/left-arrow.svg'
import { ReactComponent as RightArrowIcon } from 'assets/icons/right-arrow.svg'

const getNextMonthDateFromTheCurrent = () => {
  return moment().add(1, 'month').toDate()
}

const getMonthName = (date: Date) => {
  return date.toLocaleString('en-us', { month: 'long' })
}

const ReachDateInput = () => {
  const [reachDate, setReachDate] = useState(getNextMonthDateFromTheCurrent())

  const jumpToNextMonth = () => {
    const nextMonthDate = moment(reachDate).add(1, 'month').toDate()
    setReachDate(nextMonthDate)
  }

  return (
    <S.ReachDateInput>
      <label htmlFor="reach-date">Reach goal by</label>
      <S.Container id="reach-date" role="input">
        <button>
          <LeftArrowIcon />
        </button>
        <S.Text>
          <S.Month data-testid="month">{getMonthName(reachDate)}</S.Month>
          <S.Year data-testid="year">{reachDate.getFullYear()}</S.Year>
        </S.Text>
        <button aria-label="next month button" onClick={jumpToNextMonth}>
          <RightArrowIcon />
        </button>
      </S.Container>
    </S.ReachDateInput>
  )
}

export default ReachDateInput
