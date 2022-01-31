import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import {
  AmountContext,
  AmountContextTypes,
  AmountContextDefaultValues,
} from 'hooks/use-savings-goal'

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

export * from '@testing-library/react'
export { customRender }
