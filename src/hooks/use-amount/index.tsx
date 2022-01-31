import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import moment from 'moment'

const getNextMonthDateFromTheCurrent = () => {
  return moment().startOf('month').add(1, 'month').toDate()
}

export type AmountContextTypes = {
  amount: number
  monthlyAmount: number
  reachDate: Date | null
  updateAmount: (newAmout: number | undefined) => void
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
  const [monthlyAmount, setMonthlyAmount] = useState(0)
  const [reachDate, setReachDate] = useState(getNextMonthDateFromTheCurrent())

  const updateAmount = useCallback((newAmout: number | undefined) => {
    newAmout ? setAmount(newAmout) : setAmount(0)
  }, [])

  const updateReachDate = useCallback((newReachDate: Date) => {
    setReachDate(newReachDate)
  }, [])

  const monthsDiff = (d1: Date, d2: Date) => {
    const date1 = new Date(d1)
    const date2 = new Date(d2)
    const years = date2.getFullYear() - date1.getFullYear()
    const months = years * 12 + (date2.getMonth() - date1.getMonth())
    return months
  }

  useEffect(() => {
    const calculateMonthlyAmount = () => {
      const currentDate = new Date()
      const numberOfMonths = monthsDiff(currentDate, reachDate)
      return amount / numberOfMonths
    }
    setMonthlyAmount(calculateMonthlyAmount())
  }, [amount, reachDate])

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
