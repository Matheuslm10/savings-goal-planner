import { render, screen } from '@testing-library/react'

import MonthlyAmountSection from '.'

describe('ReachDateInput', () => {
  it('Should render the total amount.', () => {
    render(<MonthlyAmountSection />)
    const displayedMonth = screen.getByTestId('monthly-amount')

    expect(displayedMonth).toHaveTextContent('$0.00')
  })
})
