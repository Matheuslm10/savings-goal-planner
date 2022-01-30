import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  it('Should render the next month when the user clicks on the Right arrow.', () => {
    mockCurrentDate('2022-11-25')
    render(<ReachDateInput />)
    const displayedMonth = screen.getByTestId('month')
    const displayedYear = screen.getByTestId('year')
    const rightArrow = screen.getByRole('button', { name: 'next month button' })

    userEvent.click(rightArrow)

    expect(displayedMonth).toHaveTextContent('January')
    expect(displayedYear).toHaveTextContent('2023')
  })

  it('Should not allow the user to click on the Left arrow when date is less than current month + 1.', () => {
    mockCurrentDate('2022-11-25')
    render(<ReachDateInput />)
    const displayedMonth = screen.getByTestId('month')
    const displayedYear = screen.getByTestId('year')
    const leftArrow = screen.getByRole('button', {
      name: 'previous month button',
    })

    userEvent.click(leftArrow)

    expect(leftArrow).toBeDisabled()
    expect(displayedMonth).toHaveTextContent('December')
    expect(displayedYear).toHaveTextContent('2022')
  })

  it('Should render the previous month when the user is able to click on the Left arrow.', () => {
    mockCurrentDate('2022-11-25')
    render(<ReachDateInput />)
    const displayedMonth = screen.getByTestId('month')
    const displayedYear = screen.getByTestId('year')
    const rightArrow = screen.getByRole('button', { name: 'next month button' })
    const leftArrow = screen.getByRole('button', {
      name: 'previous month button',
    })

    userEvent.click(rightArrow)

    expect(displayedMonth).toHaveTextContent('January')
    expect(displayedYear).toHaveTextContent('2023')

    userEvent.click(leftArrow)

    expect(displayedMonth).toHaveTextContent('December')
    expect(displayedYear).toHaveTextContent('2022')
  })
})
