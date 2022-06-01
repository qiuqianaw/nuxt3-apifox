<template>
  <div class="my-card">
    <div class="card-title">
      <div class="card-icon">
        <!-- <a-avatar :size="40" shape="square">{{ title }}</a-avatar> -->
        <a-avatar :size="40" shape="square">
          <img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-avatar>
      </div>
      <div class="card-title_">API 文档设计</div>
    </div>
    <div class="card-content">
      <ol>
        <li>完善的 API 场景测试（流程测试）功能，保证接口数据的正确性。</li>
        <li>可视化的断言、提取变量、数据库（SQL）操作等功能。</li>
        <li>
          支持自定义前置/后置脚本，自动校验数据正确性。脚本语法 100% 兼容
          Postman，降低学习成本。
        </li>
        <li>
          支持调用
          javascript、java、python、php、js、BeanShell、go、shell、ruby、lua
          等语言代码。
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title"]);
const title = props.title;
</script>

<style scoped lang="scss">
@import "./style/MyCard.scss";
</style>
