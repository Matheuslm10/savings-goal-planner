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

export type SavingsGoalContextTypes = {
  amount: number
  monthlyAmount: number
  reachDate: Date | null
  numberOfDeposits: number
  updateAmount: (newAmout: number | undefined) => void
  updateReachDate: (newReachDate: Date) => void
}

export const SavingsGoalContextDefaultValues = {
  amount: 0,
  monthlyAmount: 0,
  reachDate: null,
  numberOfDeposits: 0,
  updateAmount: () => null,
  updateReachDate: () => Date,
}

export const SavingsGoalContext = createContext<SavingsGoalContextTypes>(
  SavingsGoalContextDefaultValues
)

export type SavingsGoalProviderProps = {
  children: React.ReactNode
}

const SavingsGoalProvider = ({ children }: SavingsGoalProviderProps) => {
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
    <SavingsGoalContext.Provider
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
    </SavingsGoalContext.Provider>
  )
}

const useSavingsGoal = () => useContext(SavingsGoalContext)

export { SavingsGoalProvider, useSavingsGoal }
