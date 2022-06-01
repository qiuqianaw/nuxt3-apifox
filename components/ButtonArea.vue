<template>
  <div class="button-area">
    <a-dropdown trigger="hover" :popup-max-height="false">
      <a-button class="button-desktop" type="primary" size="large">
        下载桌面版
      </a-button>

      <template #content>
        <a-doption v-for="(item, index) in downloadLink.data" :key="index">
          <NuxtLink :to="item.url" style="text-decoration: none; color: black">
            {{ item.title }}
          </NuxtLink>
        </a-doption>
      </template>
    </a-dropdown>
    <a-button class="button-web" type="outline" size="large" status="danger">
      <NuxtLink
        target="_blank"
        to="https://www.apifox.cn/web/user/login"
        style="text-decoration: none"
      >
        使用 Web 版
      </NuxtLink>
    </a-button>
  </div>
</template>

<script setup>
const { data: downloadLink } = await useFetch("/api/download-links", {
  pick: ["data"],
});
</script>

<style scoped lang="scss">
@import "./style/ButtonArea.scss";
</style>
