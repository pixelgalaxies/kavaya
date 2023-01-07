<template>
  <main class="home">
    <div class="construction">
      <div class="construction__inner">
        <h1>THIS PAGE IS UNDER CONSTRUCTION</h1>
        <h2>Please check back at a later time. Thank you!</h2>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import global from "@/data/global";

export default {
  name: "ContactView",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      // globalData: global,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as *;

.construction {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &__inner {
    background-color: $dark;
    color: $light;
    padding: 50px;

    h1 {
      font-size: 24px;

      @media (min-width: 768px) {
        font-size: 36px;
      }
    }
  }
}
</style>
