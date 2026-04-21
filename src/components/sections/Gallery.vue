<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'

import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation]

const slides = computed(() =>
  siteContent.galleryFilenames.map((name) => ({
    name,
    href: usePublicUrl(`img/${name}`),
    thumb: usePublicUrl(`img/${name}`),
  })),
)

let lightbox = null

onMounted(async () => {
  await import('glightbox/dist/css/glightbox.min.css')
  const { default: GLightbox } = await import('glightbox')
  lightbox = GLightbox({
    selector: '.js-wedding-glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true,
    draggable: true,
  })
})

onUnmounted(() => {
  lightbox?.destroy()
  lightbox = null
})
</script>

<template>
  <section
    id="gallery"
    class="relative py-24 lg:my-20 lg:py-28"
    :style="{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${usePublicUrl(`img/${siteContent.gallery.backgroundImage}`)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="section-title mb-16 lg:mb-28">
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {{ siteContent.gallery.sectionKicker }}
      </p>
      <h2 class="font-secondary text-4xl text-white md:text-5xl">
        {{ siteContent.gallery.sectionTitle }}
      </h2>
      <i class="far fa-heart mt-2 text-white" aria-hidden="true" />
    </div>

    <Swiper
      class="gallery-swiper px-2"
      :modules="modules"
      :slides-per-view="1"
      :space-between="16"
      :loop="true"
      :navigation="true"
      :breakpoints="{
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
      }"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="`${slide.name}-${i}`">
        <div class="gallery-item group aspect-[4/5] overflow-hidden rounded-sm bg-black/30">
          <img
            :src="slide.thumb"
            :alt="slide.name"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <a
            class="gallery-zoom js-wedding-glightbox group-hover:opacity-100"
            :href="slide.href"
            data-gallery="wedding-gallery"
            aria-label="Agrandir la photo"
          >
            <i class="fas fa-plus text-2xl text-white" aria-hidden="true" />
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.gallery-swiper :deep(.swiper-button-prev),
.gallery-swiper :deep(.swiper-button-next) {
  color: #fff;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
}
.gallery-swiper :deep(.swiper-button-prev::after),
.gallery-swiper :deep(.swiper-button-next::after) {
  font-size: 1.35rem;
}
</style>
