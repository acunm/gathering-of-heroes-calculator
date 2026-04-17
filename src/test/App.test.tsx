import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '@/App'
import { t, translations } from '@/lib/translations'

describe('App Component', () => {
  it('renders the header', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: new RegExp(t(translations.header.title).split(' ')[0], 'i'),
      }),
    ).toBeInTheDocument()
  })

  it('renders the target selection section', () => {
    render(<App />)
    expect(screen.getByText(t(translations.commanderSelection.title))).toBeInTheDocument()
  })

  it('switches the app language from the header selector', () => {
    render(<App />)

    fireEvent.change(screen.getByRole('combobox', { name: /language/i }), {
      target: { value: 'de' },
    })

    expect(
      screen.getByRole('combobox', {
        name: new RegExp(t(translations.header.languageLabel, undefined, 'de'), 'i'),
      }),
    ).toHaveValue('de')
    expect(
      screen.getByText(t(translations.commanderSelection.title, undefined, 'de')),
    ).toBeInTheDocument()
  })
})
