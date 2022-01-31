import { useContext, createContext, useState, useCallback } from 'react'
import moment from 'moment'

const getNextMonthDateFromTheCurrent = () => {
  return moment().startOf('month').add(1, 'month').toDate()
}

export type AmountContextTypes = {
  amount: number
  monthlyAmount: number
  reachDate: Date | null
  updateAmount: (newAmout: number) => void
  updateReachDate: (newReachDate: Date) => void
}

export const AmountContextDefaultValues = {
  amount: 0,
  monthlyAmount: 0,
  reachDate: null,
  updateAmount: () => null,
  updateReachDate: () => Date,
}

export const AmountContext = createContext<AmountContextTypes>(
  AmountContextDefaultValues
)

export type AmountProviderProps = {
  children: React.ReactNode
}

const AmountProvider = ({ children }: AmountProviderProps) => {
  const [amount, setAmount] = useState(0)
  const [monthlyAmount] = useState(0)
  const [reachDate, setReachDate] = useState(getNextMonthDateFromTheCurrent())

  const updateAmount = useCallback((newAmout: number) => {
    setAmount(newAmout)
  }, [])

  const updateReachDate = useCallback((newReachDate: Date) => {
    setReachDate(newReachDate)
  }, [])

  return (
    <AmountContext.Provider
      value={{
        amount,
        monthlyAmount,
        reachDate,
        updateAmount,
        updateReachDate,
      }}
    >
      {children}
    </AmountContext.Provider>
  )
}

const useAmount = () => useContext(AmountContext)

export { AmountProvider, useAmount }
