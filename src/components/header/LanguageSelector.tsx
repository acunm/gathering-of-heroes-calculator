import { useShallow } from 'zustand/react/shallow'
import { isSupportedLanguage, LANGUAGE_OPTIONS } from '@/types/common/language'
import { t, translations } from '@/lib/translations'
import { useCalculatorStore } from '@/store/use-calculator-store'

export function LanguageSelector() {
  const { language, setLanguage } = useCalculatorStore(
    useShallow((state) => ({
      language: state.language,
      setLanguage: state.setLanguage,
    })),
  )

  return (
    <label className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-widest text-neutral-400 backdrop-blur-md">
      <span>{t(translations.header.languageLabel)}</span>
      <select
        aria-label={t(translations.header.languageLabel)}
        value={language}
        onChange={({ target }) => {
          if (isSupportedLanguage(target.value)) {
            setLanguage(target.value)
          }
        }}
        className="rounded-md border border-white/10 bg-black/70 px-3 py-2 text-xs font-bold uppercase tracking-widest text-white outline-none transition focus:border-yellow-500"
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {t(translations.header.languageOptions[option])}
          </option>
        ))}
      </select>
    </label>
  )
}
