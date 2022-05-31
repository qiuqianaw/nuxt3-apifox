<template>
  <div class="layout-demo">
    <a-layout style="height: auto">
      <a-layout-header class="header">
        <a-row class="grid-demo">
          <a-col flex="125px">
            <div>
              <a-image
                width="100%"
                src="https://cdn.apifox.cn/logo/apifox.cn-logo-text.png"
              />
            </div>
          </a-col>
          <a-col flex="auto">
            <div></div>
          </a-col>
          <a-col flex="auto">
            <a-grid :cols="links.data.length" class="grid-demo-grid">
              <a-grid-item
                class="demo-item"
                v-for="(item, index) in links.data"
                :key="index"
              >
                <NuxtLink :to="item.link" class="links">{{
                  item.title
                }}</NuxtLink></a-grid-item
              >
            </a-grid>
          </a-col>
        </a-row>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script setup>
const { data: links } = await useFetch("/api/links", { pick: ["data"] });
</script>

<style scoped>
.layout-demo {
  width: 100%;
  z-index: 6;
  position: fixed;
  top: 0;
  opacity: 1;
  background: hsla(0, 0%, 100%, 0.85);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 6px rgb(0 0 0 / 4%);
}
.header {
  padding: 0 300px;
}
.links {
  text-decoration: none;
  color: black;
}
</style>

<style scoped>
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 15px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  /* background-color: var(--color-primary-light-4); */
  /* filter: blur(1px); */
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  /* background-color: var(--color-primary-light-3); */
  /* filter: blur(1px); */
}

.layout-demo :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo-grid .demo-item:nth-child(2n) {
  /* background-color: rgba(var(--arcoblue-6), 0.9); */
}
.grid-demo-grid .demo-item:nth-child(2n + 1) {
  /* background-color: var(--color-primary-light-4); */
}
</style>
