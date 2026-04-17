import { type SelectedCommander, type CommanderCategory } from '../commander/commander'
import { type AppLanguage } from '../common/language'
import { type MissionState, type SpeedupInputMode } from '../mission/mission'

export type CalculatorState = {
  selectedCommanders: SelectedCommander[]
  missions: MissionState
  selectedCategory: CommanderCategory | null
  language: AppLanguage
  speedupTimeStr: string
  speedupInputMode: SpeedupInputMode

  // Actions
  reset: () => void
  setLanguage: (language: AppLanguage) => void
  toggleCommander: (name: string, category: CommanderCategory, tierId: number) => void
  setSelectedCategory: (category: CommanderCategory | null) => void
  setSpeedupInputMode: (mode: SpeedupInputMode) => void
  updateDaily: () => void
  updateChallenge: (id: string, value: number) => void
  updateRepeatable: (id: string, value: number) => void
  updateSpeedupMinutes: (category: keyof MissionState['speedupMinutes'], value: number) => void
  updateGemsSpent: (value: number) => void
  updateSpeedupTime: (timeStr: string) => void

  // Selectors/Computed values
  getTotalTokens: () => number
  getTotalCost: () => number
  getNeededTokens: () => number
  getUnlockStatus: () => boolean
  getProgress: () => number
  getSpeedupMinutes: () => number
  isTierUnlocked: (tierId: number) => boolean
  getTierUnlockRequirement: (tierId: number) => { amount: number; tiers: string } | null
}
