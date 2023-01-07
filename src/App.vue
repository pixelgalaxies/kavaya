<template>
  <div id="app">
    <h1 class="sr-only">Tales of Kavaya</h1>
    <MainNavigation :links="globalData.navigation" />
    <router-view />
    <!-- FOOTER HERE -->
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavigation from "@/components/Navigation.vue";
import global from "@/data/global";

export default {
  name: "App",
  components: {
    MainNavigation,
  },
  data() {
    return {
      globalData: global,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@use "@/assets/styles/resets.scss" as *;
@use "@/assets/styles/variables.scss" as *;

html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Syne Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $light;
  font-size: 18px;
  // background-image: url("@/assets/images/newBG.jpg");
  background-color: $purple;
  min-height: 100vh;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.overlay--open {
  overflow-y: hidden;
}

.heading {
  font-size: 48px;
}

.container {
  max-width: $lg;
  margin-inline: auto;
  width: 100%;

  @media (min-width: $xl) {
    max-width: $xl;
  }
}
</style>
