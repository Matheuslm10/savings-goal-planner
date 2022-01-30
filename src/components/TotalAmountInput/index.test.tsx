import { ReactElement } from 'react'
import { render, screen, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {
  AmountContext,
  AmountContextTypes,
  AmountContextDefaultValues,
} from 'hooks/use-amount'

import TotalAmountInput from '.'

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
  it('Should call the updateAmount method for each number at the input.', async () => {
    const amountProviderProps = {
      ...AmountContextDefaultValues,
      updateAmount: jest.fn(),
    }

    customRender(<TotalAmountInput />, { amountProviderProps })

    const totalAmount = screen.getByRole('textbox')

    userEvent.type(totalAmount, '25000')
    expect(amountProviderProps.updateAmount).toHaveBeenCalledTimes(5)
  })
})
