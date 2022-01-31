import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SavingsGoalContextDefaultValues } from 'hooks/use-savings-goal'
import { customRender } from 'utils/test-utils'

import ReachDateInput from '.'

const mockCurrentDate = (testDate: string) => {
  jest.useFakeTimers('modern')
  jest.setSystemTime(new Date(testDate))
}

describe('ReachDateInput', () => {
  beforeEach(() => {
    jest.useRealTimers()
  })

  it('Should render the month and year of the reach date.', () => {
    const amountProviderProps = {
      ...SavingsGoalContextDefaultValues,
      reachDate: new Date('2023-03-25'),
    }

    customRender(<ReachDateInput />, { amountProviderProps })
    const displayedMonth = screen.getByTestId('month')
    const displayedYear = screen.getByTestId('year')

    expect(displayedMonth).toHaveTextContent('March')
    expect(displayedYear).toHaveTextContent('2023')
  })

  it('Should call the updateReachDate function with the next date, when the user clicks on the Right arrow.', () => {
    const testReachDate = new Date('2022-12-25')
    const testNextDate = new Date('2023-01-25')

    const amountProviderProps = {
      ...SavingsGoalContextDefaultValues,
      reachDate: testReachDate,
      updateReachDate: jest.fn(),
    }

    customRender(<ReachDateInput />, { amountProviderProps })
    const rightArrow = screen.getByRole('button', { name: 'next month button' })

    userEvent.click(rightArrow)

    expect(amountProviderProps.updateReachDate).toHaveBeenCalledWith(
      testNextDate
    )
  })

  it('Should call the updateReachDate function with the previous date, when the user clicks on the Left arrow.', () => {
    mockCurrentDate('2022-11-25')
    const testReachDate = new Date('2023-01-25')
    const testPreviousDate = new Date('2022-12-25')

    const amountProviderProps = {
      ...SavingsGoalContextDefaultValues,
      reachDate: testReachDate,
      updateReachDate: jest.fn(),
    }

    customRender(<ReachDateInput />, { amountProviderProps })
    const leftArrow = screen.getByRole('button', {
      name: 'previous month button',
    })

    userEvent.click(leftArrow)

    expect(amountProviderProps.updateReachDate).toHaveBeenCalledWith(
      testPreviousDate
    )
  })

  it('Should not allow the user to click on the Left arrow when date is less than current month + 1.', () => {
    mockCurrentDate('2022-11-25')
    const testReachDate = new Date('2022-12-25')

    const amountProviderProps = {
      ...SavingsGoalContextDefaultValues,
      reachDate: testReachDate,
      updateReachDate: jest.fn(),
    }

    customRender(<ReachDateInput />, { amountProviderProps })
    const leftArrow = screen.getByRole('button', {
      name: 'previous month button',
    })

    userEvent.click(leftArrow)

    expect(leftArrow).toBeDisabled()
    expect(amountProviderProps.updateReachDate).not.toHaveBeenCalled()
  })
})
