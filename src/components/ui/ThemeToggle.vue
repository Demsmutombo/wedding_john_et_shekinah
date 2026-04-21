<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const { preference, setPreference } = useTheme()

/** Ordre au clic : clair → sombre → auto → clair */
const cycleOrder = /** @type {const} */ (['light', 'dark', 'system'])

function cycleTheme() {
  const i = cycleOrder.indexOf(preference.value)
  const next = cycleOrder[i === -1 ? 0 : (i + 1) % cycleOrder.length]
  setPreference(next)
}

const iconClass = computed(() => {
  const p = preference.value
  if (p === 'light') return 'fas fa-sun'
  if (p === 'dark') return 'fas fa-moon'
  return 'fas fa-adjust'
})

const modeLabel = computed(() => {
  const p = preference.value
  if (p === 'light') return 'Clair'
  if (p === 'dark') return 'Sombre'
  return 'Automatique'
})

const buttonTitle = computed(() => {
  const p = preference.value
  const next =
    p === 'light' ? 'sombre' : p === 'dark' ? 'automatique (appareil)' : 'clair'
  if (p === 'system') {
    return `Thème automatique (suit Windows / le navigateur). Clic : passer au thème ${next}.`
  }
  return `Thème ${modeLabel.value.toLowerCase()}. Clic : passer au thème ${next}.`
})
</script>

<template>
  <button
    type="button"
    class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-lg text-primary shadow-sm backdrop-blur-md transition hover:border-primary/50 hover:bg-primary/15 hover:shadow-md dark:border-white/25 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/15"
    :title="buttonTitle"
    :aria-label="`Thème : ${modeLabel}. Appuyer pour changer.`"
    @click="cycleTheme"
  >
    <i :class="iconClass" aria-hidden="true" />
  </button>
</template>
