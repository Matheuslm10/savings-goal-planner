import React from 'react'
import * as S from './styles'

import { ReactComponent as LeftArrowIcon } from 'assets/icons/left-arrow.svg'
import { ReactComponent as RightArrowIcon } from 'assets/icons/right-arrow.svg'

const ReachDateInput = () => {
  return (
    <S.Container>
      <label htmlFor="reach-date">Reach goal by</label>
      <S.Wrapper id="reach-date" role="input">
        <button>
          <LeftArrowIcon />
        </button>
        <S.Text>
          <S.Month>January</S.Month>
          <S.Year>2022</S.Year>
        </S.Text>
        <button>
          <RightArrowIcon />
        </button>
      </S.Wrapper>
    </S.Container>
  )
}

export default ReachDateInput
