import React from 'react'
import GlobalStyle from 'styles/global'

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <div data-testid="greetings-container">Welcome to the Origin THA</div>
    </>
  )
}
