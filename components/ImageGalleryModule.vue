<template>
  <div class="image-gallery-module">
    <a-carousel
      :style="{
        width: '1244px',
        height: '765px',
        // padding: '0 500px',
        margin: '0 auto',
      }"
      :auto-play="true"
      :default-current="2"
    >
      <a-carousel-item v-for="(image, index) in images.data" :key="index">
        <img
          :src="image.url"
          :style="{
            width: '100%',
          }"
        />
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script setup>
import {} from "vue";
const { data: images } = await useFetch("/api/gallery", { pick: ["data"] });
</script>

<style scoped lang="scss">
.image-gallery-module {
  background: url(https://cdn.apifox.cn/www/assets/image/index/hero-bottom-bg.png)
    bottom no-repeat;
}
</style>
