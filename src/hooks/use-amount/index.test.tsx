import { renderHook } from '@testing-library/react-hooks'
import { useAmount, AmountProvider, AmountProviderProps } from '.'

describe('useCart', () => {
  it('Should return the amount default value.', () => {
    const wrapper = ({ children }: AmountProviderProps) => (
      <AmountProvider>{children}</AmountProvider>
    )

    const { result } = renderHook(() => useAmount(), {
      wrapper,
    })

    expect(result.current.amount).toBe(0)
  })
})
