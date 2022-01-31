import { ReactElement } from 'react'
import { render, screen, RenderOptions } from '@testing-library/react'

import {
  AmountContext,
  AmountContextTypes,
  AmountContextDefaultValues,
} from 'hooks/use-amount'

import MonthlyAmountSection from '.'

type CustomRenderProps = {
  amountProviderProps?: AmountContextTypes
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    amountProviderProps = AmountContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <AmountContext.Provider value={amountProviderProps}>
      {ui}
    </AmountContext.Provider>,
    renderOptions
  )

describe('ReachDateInput', () => {
  it('Should render the monthly amount calculated by useAmount.', () => {
    const amountProviderProps = {
      ...AmountContextDefaultValues,
      monthlyAmount: 1345,
    }

    customRender(<MonthlyAmountSection />, { amountProviderProps })
    const displayedMonth = screen.getByTestId('monthly-amount')

    expect(displayedMonth).toHaveTextContent('$1,345')
  })

  it('Should render the correctly description of the goal.', () => {
    const amountProviderProps = {
      ...AmountContextDefaultValues,
      amount: 1345,
      numberOfDeposits: 1,
      reachDate: new Date('2022-03-01T00:00:00'),
    }

    customRender(<MonthlyAmountSection />, { amountProviderProps })
    const description = screen.getByTestId('description')

    expect(description).toHaveTextContent(
      "You're planning 1 monthly deposit to reach your $1,345.00 goal by March 2022."
    )
  })

  it('Should render the correctly description of the goal, when number of deposits is more than 1.', () => {
    const amountProviderProps = {
      ...AmountContextDefaultValues,
      amount: 22345.65,
      numberOfDeposits: 5,
      reachDate: new Date('2023-12-01T00:00:00'),
    }

    customRender(<MonthlyAmountSection />, { amountProviderProps })
    const description = screen.getByTestId('description')

    expect(description).toHaveTextContent(
      "You're planning 5 monthly deposits to reach your $22,345.65 goal by December 2023."
    )
  })
})
