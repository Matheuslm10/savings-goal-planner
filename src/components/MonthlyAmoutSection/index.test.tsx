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
})
