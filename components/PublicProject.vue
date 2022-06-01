<template>
  <div class="pp-outter">
    <div class="row">
      <a-row class="grid-demo">
        <a-col :flex="1" v-for="(item, index) in projects.data" :key="index">
          <a-card class="card" hoverable :bordered="false">
            <div class="card-div">
              <span class="card-span">
                <a-avatar>
                  <img size="48" alt="avatar" :src="item.imgUrl" />
                </a-avatar>
                <a-typography-text class="card-text">{{
                  item.title
                }}</a-typography-text>
              </span>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div class="feature">
      <div class="title">功能特性</div>
      <div class="feat">
        <a-grid :cols="2" :colGap="0" :rowGap="0" class="grid-demo-grid">
          <a-grid-item
            class="demo-item"
            v-for="(item, index) in features.data"
            :key="index"
          >
            <!-- TODO 写组件 -->
            <!-- <div class="card-container">
              <a-card class="card_" :title="item.title">
                <ol>
                  <li v-for="(item_, index_) in item.content" :key="index_">
                    {{ item_ }}
                  </li>
                </ol>
              </a-card>
            </div> -->
            <MyCard :data="item" />
          </a-grid-item>
        </a-grid>
      </div>
    </div>
    <div class="more-function">
      <a-button type="outline" shape="round" long size="large" disabled
        >更多功能介绍 >
      </a-button>
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
const { data: projects } = await useFetch("/api/public-projects", {
  pick: ["data"],
});
const { data: features } = await useFetch("/api/feature", {
  pick: ["data"],
});
</script>
<script>
import { IconUser } from "@arco-design/web-vue/es/icon";
export default {
  components: { IconUser },
};
</script>

<style scoped lang="scss">
@import "./style/PublicProject.scss";
</style>
