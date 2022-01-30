import { useContext, createContext, useState, useCallback } from 'react'

export type AmountContextTypes = {
  amount: number
  updateAmount: (newAmout: number) => void
}

export const AmountContextDefaultValues = {
  amount: 0,
  updateAmount: () => null,
}

export const AmountContext = createContext<AmountContextTypes>(
  AmountContextDefaultValues
)

export type AmountProviderProps = {
  children: React.ReactNode
}

const AmountProvider = ({ children }: AmountProviderProps) => {
  const [amount, setAmount] = useState(0)

  const updateAmount = useCallback((newAmout: number) => {
    setAmount(newAmout)
  }, [])

  return (
    <AmountContext.Provider
      value={{
        amount: amount,
        updateAmount,
      }}
    >
      {children}
    </AmountContext.Provider>
  )
}

const useAmount = () => useContext(AmountContext)

export { AmountProvider, useAmount }
