export type AppLanguage = 'en' | 'de' | 'vi'

export const DEFAULT_LANGUAGE: AppLanguage = 'en'

export const LANGUAGE_OPTIONS = [
  DEFAULT_LANGUAGE,
  'de',
  'vi',
] as const satisfies readonly AppLanguage[]

export function isSupportedLanguage(value: string): value is AppLanguage {
  return (LANGUAGE_OPTIONS as readonly string[]).includes(value)
}
