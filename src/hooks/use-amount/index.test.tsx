import { renderHook } from '@testing-library/react-hooks'
import { act } from '@testing-library/react'
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

  it('Should update the amount value.', () => {
    const wrapper = ({ children }: AmountProviderProps) => (
      <AmountProvider>{children}</AmountProvider>
    )

    const { result } = renderHook(() => useAmount(), {
      wrapper,
    })

    act(() => {
      result.current.updateAmount(20000)
    })

    expect(result.current.amount).toBe(20000)
  })
})
