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
  numberOfDeposits: number
  updateAmount: (newAmout: number | undefined) => void
  updateReachDate: (newReachDate: Date) => void
}

export const AmountContextDefaultValues = {
  amount: 0,
  monthlyAmount: 0,
  reachDate: null,
  numberOfDeposits: 0,
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
  const [numberOfDeposits, setNumberOfDeposits] = useState(0)

  const updateAmount = useCallback((newAmout: number | undefined) => {
    newAmout ? setAmount(newAmout) : setAmount(0)
  }, [])

  const updateReachDate = useCallback((newReachDate: Date) => {
    setReachDate(newReachDate)
  }, [])

  useEffect(() => {
    const calculateMonthsDiff = () => {
      const currentDate = new Date()
      const years = reachDate.getFullYear() - currentDate.getFullYear()
      const months =
        years * 12 + (reachDate.getMonth() - currentDate.getMonth())
      return months
    }

    const diffInMonths = calculateMonthsDiff()
    setMonthlyAmount(amount / diffInMonths)
    setNumberOfDeposits(diffInMonths)
  }, [amount, reachDate])

  return (
    <AmountContext.Provider
      value={{
        amount,
        monthlyAmount,
        reachDate,
        numberOfDeposits,
        updateAmount,
        updateReachDate,
      }}
    >
      {children}
    </AmountContext.Provider>
  )
}

const useSavingsGoal = () => useContext(AmountContext)

export { AmountProvider, useSavingsGoal }
