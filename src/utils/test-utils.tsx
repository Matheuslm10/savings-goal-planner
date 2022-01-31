import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import {
  SavingsGoalContext,
  SavingsGoalContextTypes,
  SavingsGoalContextDefaultValues,
} from 'hooks/use-savings-goal'

type CustomRenderProps = {
  amountProviderProps?: SavingsGoalContextTypes
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    amountProviderProps = SavingsGoalContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <SavingsGoalContext.Provider value={amountProviderProps}>
      {ui}
    </SavingsGoalContext.Provider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender }
