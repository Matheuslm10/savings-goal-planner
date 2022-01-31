import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AmountContextDefaultValues } from 'hooks/use-savings-goal'
import { customRender } from 'utils/test-utils'

import TotalAmountInput from '.'

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
