import '@testing-library/jest-dom'
import { beforeEach } from 'vitest'
import { useCalculatorStore } from '@/store/use-calculator-store'

beforeEach(() => {
  window.localStorage.clear()
  useCalculatorStore.setState(useCalculatorStore.getInitialState(), true)
})
