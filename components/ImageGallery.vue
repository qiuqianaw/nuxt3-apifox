<template>
  <div class="image-gallery-module">
    <a-carousel class="swiper" :auto-play="true" :default-current="1">
      <a-carousel-item v-for="(image, index) in images.data" :key="index">
        <img class="swiper-item" :src="image.url" />
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script setup>
const { data: images } = await useFetch("/api/gallery", { pick: ["data"] });
</script>

<style scoped lang="scss">
@import "./style/ImageGallery.scss";
</style>
