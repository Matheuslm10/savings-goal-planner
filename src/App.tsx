import React from 'react'
import GlobalStyle from 'styles/global'

import Card from 'components/Card'
import Container from 'components/Container'
import Header from 'components/Header'
import Text from 'components/Text'

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Text content="Let's plan your saving goal." />
        <Card />
      </Container>
    </>
  )
}
