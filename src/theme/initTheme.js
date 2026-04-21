export const THEME_STORAGE_KEY = 'wedding-theme-preference'

/** @typedef {'light' | 'dark' | 'system'} ThemePreference */

/**
 * @returns {ThemePreference}
 */
export function readStoredPreference() {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
  } catch {
    /* ignore */
  }
  /** Par défaut « clair » : le mode « système » prête à confusion si Windows est en clair. */
  return 'light'
}

/**
 * @param {ThemePreference} pref
 */
export function resolveDark(pref) {
  if (pref === 'dark') return true
  if (pref === 'light') return false
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch {
    return false
  }
}

/**
 * @param {ThemePreference} pref
 */
export function applyTheme(pref) {
  const dark = resolveDark(pref)
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}

export function initThemeFromStorage() {
  applyTheme(readStoredPreference())
}

/** Réagir au changement OS quand la préférence est « system ». */
export function listenSystemThemeChanges() {
  if (typeof window === 'undefined') return
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener('change', () => {
    if (readStoredPreference() === 'system') applyTheme('system')
  })
}
