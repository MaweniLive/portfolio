<template>
  <div class="home" id="landing-img">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style>
#landing-img {
  background-image: url(https://i.postimg.cc/BnLkybzx/adrien-olichon-GH9-Lwhl-SO4-unsplash.jpg);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>