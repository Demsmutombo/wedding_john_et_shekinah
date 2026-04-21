<script setup>
import { computed, ref } from 'vue'
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'

/** null = tout afficher (état initial, comme Isotope sans filtre) */
const activeCategory = ref(null)

const visibleMembers = computed(() => {
  if (!activeCategory.value) return siteContent.family.members
  return siteContent.family.members.filter((m) => m.category === activeCategory.value)
})

function selectFilter(match) {
  activeCategory.value = match
}
</script>

<template>
  <section id="family" class="bg-white py-16 dark:bg-slate-950 lg:py-20">
    <div class="mx-auto max-w-7xl px-4 pt-8 pb-6 lg:px-6">
      <div class="section-title">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {{ siteContent.family.sectionKicker }}
        </p>
        <h2 class="font-secondary text-4xl text-brand-dark dark:text-slate-100 md:text-5xl">
          {{ siteContent.family.sectionTitle }}
        </h2>
        <i class="far fa-heart mt-2 text-brand-dark dark:text-slate-300" aria-hidden="true" />
      </div>

      <div class="mb-6 flex flex-wrap justify-center gap-2">
        <button
          v-for="f in siteContent.family.filters"
          :key="f.id"
          type="button"
          class="border-2 border-primary px-4 py-2 text-sm font-bold transition"
          :class="
            activeCategory === f.match
              ? 'bg-primary text-white'
              : 'text-primary hover:bg-primary/10 dark:hover:bg-primary/20'
          "
          @click="selectFilter(f.match)"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="member in visibleMembers"
          :key="member.image + member.title"
          class="overflow-hidden shadow-sm transition-opacity duration-300 dark:shadow-black/35"
        >
          <div class="relative mb-0">
            <img
              :src="usePublicUrl(`img/${member.image}`)"
              :alt="member.title"
              class="h-72 w-full object-cover md:h-80"
              loading="lazy"
            />
            <div class="bg-secondary p-6 text-center dark:bg-slate-900/80">
              <h4 class="mb-2 text-lg font-semibold text-brand-dark dark:text-slate-100">{{ member.title }}</h4>
              <p class="text-xs font-semibold uppercase tracking-wide text-brand-dark/70 dark:text-slate-400">
                {{ member.subtitle }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
