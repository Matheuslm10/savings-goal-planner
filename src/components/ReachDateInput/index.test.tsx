import { render, screen } from '@testing-library/react'

import ReachDateInput from '.'

describe('ReachDateInput', () => {
  beforeEach(() => {
    jest.useRealTimers()
  })

  it('Should render the month subsequent to the current month.', () => {
    jest.useFakeTimers('modern')
    const testDate = '2022-01-25'
    jest.setSystemTime(new Date(testDate))

    render(<ReachDateInput />)

    const displayedMonth = screen.getByTestId('month')

    expect(displayedMonth).toHaveTextContent('February')
  })
})
