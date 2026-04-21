<script setup>
import { siteContent } from '@/content'
</script>

<template>
  <footer id="contact" class="mt-20 bg-brand-dark py-16 text-white">
    <div class="mx-auto max-w-4xl px-4 py-8 text-center">
      <div class="section-title">
        <h2 class="font-secondary text-4xl text-white md:text-6xl">
          {{ siteContent.footer.title }}
        </h2>
        <i class="far fa-heart mt-2 text-white" aria-hidden="true" />
      </div>

      <div
        class="mt-8 flex flex-col items-center justify-center gap-6 text-sm sm:flex-row sm:text-base"
      >
        <div>
          {{ siteContent.footer.creditLabel }}
          <a
            :href="siteContent.footer.creditUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold text-primary"
          >
            {{ siteContent.footer.creditName }}
          </a>
        </div>
        <span class="hidden text-white/40 sm:inline">|</span>
        <div class="flex items-center justify-center">
          <a
            :href="siteContent.footer.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-500 text-2xl text-green-400 transition hover:bg-green-500 hover:text-white"
            :aria-label="siteContent.footer.whatsappAriaLabel"
            :title="siteContent.footer.whatsappAriaLabel"
          >
            <i class="fab fa-whatsapp" aria-hidden="true" />
          </a>
        </div>
      </div>

      <p class="mt-8 text-sm text-white/80">
        &copy;
        <a
          class="text-primary hover:underline"
          :href="siteContent.footer.copyrightCoupleHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ siteContent.footer.copyrightLabel }}
        </a>
      </p>
    </div>
  </footer>
</template>
