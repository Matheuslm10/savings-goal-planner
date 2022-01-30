import { App } from './App'
import { render } from '@testing-library/react'

describe('App', () => {
  xit('returns the text', () => {
    const component = render(<App />)

    expect(component.getByTestId('greetings-container').innerHTML).toBe(
      'Welcome to the Origin THA'
    )
  })
})
