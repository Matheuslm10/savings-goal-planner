import { render, screen } from '@testing-library/react'

import ReachDateInput from '.'

const mockCurrentDate = (testDate: string) => {
  jest.useFakeTimers('modern')
  jest.setSystemTime(new Date(testDate))
}

describe('ReachDateInput', () => {
  beforeEach(() => {
    jest.useRealTimers()
  })

  it('Should render the month subsequent to the current month.', () => {
    mockCurrentDate('2022-01-25')

    render(<ReachDateInput />)

    const displayedMonth = screen.getByTestId('month')

    expect(displayedMonth).toHaveTextContent('February')
  })

  it('Should render the month subsequent to the current date and the correct year, when is December.', () => {
    mockCurrentDate('2022-12-25')

    render(<ReachDateInput />)

    const displayedMonth = screen.getByTestId('month')
    const displayedYear = screen.getByTestId('year')

    expect(displayedMonth).toHaveTextContent('January')
    expect(displayedYear).toHaveTextContent('2023')
  })

  it('Should render the month subsequent to the current date and the correct year, when is leap year.', () => {
    mockCurrentDate('2024-01-31')

    render(<ReachDateInput />)

    const displayedMonth = screen.getByTestId('month')
    const displayedYear = screen.getByTestId('year')

    expect(displayedMonth).toHaveTextContent('February')
    expect(displayedYear).toHaveTextContent('2024')
  })
})
