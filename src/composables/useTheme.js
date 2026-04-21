import { ref } from 'vue'
import {
  THEME_STORAGE_KEY,
  applyTheme,
  readStoredPreference,
} from '@/theme/initTheme.js'

const preference = ref(readStoredPreference())

/**
 * Préférence thème : clair, sombre, ou suit le système.
 * Persistance `localStorage` + application immédiate sur `<html>`.
 *
 * (Pas de `watch` lié au cycle de vie d’un composant : un watcher créé
 * depuis le premier `ThemeToggle` pouvait être arrêté ou ne pas couvrir
 * tous les cas ; le clic doit toujours appeler `applyTheme` tout de suite.)
 */
export function useTheme() {
  /**
   * @param {'light' | 'dark' | 'system'} v
   */
  function setPreference(v) {
    if (v !== 'light' && v !== 'dark' && v !== 'system') return
    preference.value = v
    try {
      localStorage.setItem(THEME_STORAGE_KEY, v)
    } catch {
      /* ignore */
    }
    applyTheme(v)
  }

  return { preference, setPreference }
}
