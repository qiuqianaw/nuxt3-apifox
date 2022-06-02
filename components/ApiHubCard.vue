<template>
  <div class="apihub-card">
    <div class="apihub-card-banner">
      <a-avatar class="card-logo" :size="64" shape="square">
        <img alt="avatar" :src="data.iconUrl" />
      </a-avatar>
      <span class="apihub-card-text">
        {{ data.title }}
      </span>
    </div>
    <div class="apihub-card-description">
      {{ data.desc }}
    </div>
    <div class="apihub-card-icon">
      <span role="img" class="anticon"> </span
      ><span class="view">{{ data.datas[0] }}</span>
      <span role="img" class="anticon"> </span
      ><span class="star">{{ data.datas[1] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["data"]);
const data = props.data;
</script>

<style scoped lang="scss">
@import "./style/ApiHubCard.scss";
</style>
