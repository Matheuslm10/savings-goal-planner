import React from 'react'
import GlobalStyle from 'styles/global'
import * as S from './styles'

import Card from 'components/Card'
import Header from 'components/Header'

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <S.Wrapper>
        <h1>
          Let&apos;s plan your <span>saving goal.</span>
        </h1>
        <Card />
      </S.Wrapper>
    </>
  )
}
