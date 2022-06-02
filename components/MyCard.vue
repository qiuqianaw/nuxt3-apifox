<template>
  <div class="my-card">
    <div class="card-title">
      <div class="card-icon">
        <a-avatar :size="45" shape="square">
          <img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-avatar>
      </div>
      <div class="card-title_">{{ data.title }}</div>
    </div>
    <div class="card-content">
      <ol>
        <li v-for="(item_, index_) in data.content" :key="index_">
          {{ item_ }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["data"]);
const data = props.data;
</script>

<style scoped lang="scss">
@import "./style/MyCard.scss";
</style>
