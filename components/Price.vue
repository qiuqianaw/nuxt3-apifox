<template>
  <div class="price-outter">
    <div class="price-box">
      <div
        class="pricing1-top-wrapper"
        :style="{
          background: 'linear-gradient(90deg,#fd6a4f,#fc9e23)',
        }"
      >
        <h1 class="pricing1-money">免费</h1>
        <div class="pricing1-name">公网版 (SaaS版)</div>
      </div>
      <div class="pricing1-content">
        <div class="">
          <div
            class="content-item"
            v-for="(item, index) in feature"
            :key="index"
          >
            <span role="img" aria-label="check" class="anticon anticon-check">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="check"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path :d="pathD"></path>
              </svg>
            </span>
            <span> {{ item }} </span>
          </div>
        </div>
      </div>
      <div class="pricing1-button-wrapper">
        <button
          :style="{
            background: 'linear-gradient(90deg,#fd6a4f,#fc9e23)',
          }"
        >
          立即下载
        </button>
      </div>
    </div>
    <div class="price-box">
      <div
        class="pricing1-top-wrapper"
        :style="{
          background: 'linear-gradient(90deg,#e0eafc,#cfdef3)',
        }"
      >
        <h1 class="pricing1-money">付费</h1>
        <div class="pricing1-name">私有化部署版</div>
      </div>
      <div
        class="pricing1-content"
        :style="{
          borderLeft: '1px solid #fd8736',
          borderRight: '1px solid #fd8736',
        }"
      >
        <div class="">
          <div
            class="content-item"
            v-for="(item, index) in featureVip"
            :key="index"
          >
            <span role="img" aria-label="check" class="anticon anticon-check">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="check"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path :d="pathD"></path>
              </svg>
            </span>
            <span> {{ item }} </span>
          </div>
        </div>
      </div>
      <div class="pricing1-button-wrapper">
        <button
          :style="{
            background: 'linear-gradient(90deg,#e0eafc,#cfdef3)',
          }"
        >
          立即下载
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const pathD = ref(
  "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
);
const feature = ref([
  "无任何限制",
  "不限团队人数",
  "不限功能",
  "不限项目数",
  "不限接口数",
]);
const featureVip = ref([
  "部署在企业内部",
  "按使用人数收费",
  "不限功能",
  "不限项目数",
  "不限接口数",
]);
</script>

<style scoped lang="scss">
@import "./style/Price.scss";
</style>
