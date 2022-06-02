<template>
  <div class="api-hub-container">
    <div class="hub-title">
      <h2 class="apihub-wrapper-title">API Hub</h2>
      <p class="apihub-wrapper-subtitle">
        开放 API 共享平台，发现更多公开 API 项目
      </p>
    </div>
    <div class="hubs-display">
      <a-grid :cols="4" :colGap="0" :rowGap="0" class="grid-demo-grid">
        <a-grid-item
          class="demo-item"
          v-for="(item, index) in apiHubs.data"
          :key="index"
        >
          <ApiHubCard :data="item" />
        </a-grid-item>
      </a-grid>
    </div>
    <!-- TODO -->
    <!-- <ApiHubCardMore /> -->
  </div>
</template>

<script setup lang="ts">
import {} from "vue";
const { data: apiHubs } = await useFetch("/api/api-hub-cards", {
  pick: ["data"],
});
</script>

<style scoped lang="scss">
@import "./style/ApiHub.scss";
</style>
