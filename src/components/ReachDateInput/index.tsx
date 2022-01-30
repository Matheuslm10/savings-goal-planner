import React, { useState } from 'react'
import * as S from './styles'
import moment from 'moment'

import { ReactComponent as LeftArrowIcon } from 'assets/icons/left-arrow.svg'
import { ReactComponent as RightArrowIcon } from 'assets/icons/right-arrow.svg'

const getNextMonthDateFromTheCurrent = () => {
  const nextMonthDate = moment().add(1, 'month').toDate()

  const monthName = nextMonthDate.toLocaleString('en-us', { month: 'long' })
  const year = nextMonthDate.getFullYear()

  return { monthName, year }
}

const ReachDateInput = () => {
  const [month] = useState(getNextMonthDateFromTheCurrent().monthName)
  const [year] = useState(getNextMonthDateFromTheCurrent().year)

  return (
    <S.ReachDateInput>
      <label htmlFor="reach-date">Reach goal by</label>
      <S.Container id="reach-date" role="input">
        <button>
          <LeftArrowIcon />
        </button>
        <S.Text>
          <S.Month data-testid="month">{month}</S.Month>
          <S.Year data-testid="year">{year}</S.Year>
        </S.Text>
        <button>
          <RightArrowIcon />
        </button>
      </S.Container>
    </S.ReachDateInput>
  )
}

export default ReachDateInput
