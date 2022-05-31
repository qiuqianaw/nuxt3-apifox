<template>
  <div class="container">
    <div class="header-H1">
      <h1 class="header-title" style="margin-bottom: 16px">Apifox</h1>
      <p style="margin-bottom: 12px">
        API 文档、API 调试、API Mock、API 自动化测试
      </p>
      <p
        style="
          font-size: 14px;
          color: rgba(24, 24, 25, 0.7);
          margin-bottom: 24px;
        "
      >
        Apifox = Postman + Swagger + Mock + JMeter
      </p>
    </div>
    <div class="button-area">
      <a-button class="button-desktop" type="primary" size="large"
        >下载桌面版</a-button
      >

      <a-button class="button-web" type="outline" size="large" status="danger">
        <NuxtLink
          target="_blank"
          to="https://www.apifox.cn/web/user/login"
          style="text-decoration: none"
          >使用 Web 版</NuxtLink
        >
      </a-button>
    </div>
    <div class="image-gallery-module">
      <a-carousel
        :style="{
          width: '68%',
          height: '765px',
          // padding: '0 500px',
          margin: '0 auto',
        }"
        :auto-play="true"
        :default-current="2"
      >
        <a-carousel-item v-for="image in images.data">
          <img
            :src="image.url"
            :style="{
              width: '100%',
            }"
          />
        </a-carousel-item>
      </a-carousel>
    </div>
  </div>
</template>

<script setup>
const { data: images } = await useFetch("/api/gallery", { pick: ["data"] });
</script>

<style scoped>
.image-gallery-module {
  background: url(https://cdn.apifox.cn/www/assets/image/index/hero-bottom-bg.png)
    bottom no-repeat;
}
.container {
  background: url(https://cdn.apifox.cn/www/assets/image/index/hero-bg.png);
  box-sizing: border-box;
  width: 100%;
  /* max-width: 1176px; */
  margin: 0 auto;
  padding: 0 15px;
}

.header-H1 .header-title {
  padding-bottom: 11px;
  font-weight: 600;
  font-weight: 700;
  font-size: 68px;
  line-height: 1.3;
  line-height: 1.04;
  text-align: center;
}
.header-H1 p {
  padding-top: 11px;
  font-weight: 400;
  font-size: 30px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  text-align: center;
}
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
.header-H1 {
  padding: 100px 0;
}
</style>
