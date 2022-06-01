<template>
  <div class="button-area">
    <a-dropdown trigger="hover" :popup-max-height="false">
      <a-button class="button-desktop" type="primary" size="large"
        >下载桌面版</a-button
      >

      <template #content>
        <a-doption v-for="(item, index) in downloadLink.data" :key="index">
          <NuxtLink
            :to="item.url"
            style="text-decoration: none; color: black"
            >{{ item.title }}</NuxtLink
          >
        </a-doption>
      </template>
    </a-dropdown>
    <a-button class="button-web" type="outline" size="large" status="danger">
      <NuxtLink
        target="_blank"
        to="https://www.apifox.cn/web/user/login"
        style="text-decoration: none"
        >使用 Web 版</NuxtLink
      >
    </a-button>
  </div>
</template>

<script setup>
import {} from "vue";
const { data: downloadLink } = await useFetch("/api/download-links", {
  pick: ["data"],
});
</script>

<style scoped lang="scss">
.button-area {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  /* background-color: wheat; */
}
.button-desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 11.5px 17px; */
  padding: 20px;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(
    45deg,
    #ff387e 6.54%,
    #ff386d 21.35%,
    #f44a53 64.03%,
    #f35e3a 92.78%
  );
}
.button-web {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  color: #f44a53;
  cursor: pointer;
  margin-left: 25px;
  border: 1px solid #f44a53;
}
</style>
