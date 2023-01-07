<template>
  <main class="about">
    <HeroSection :content="aboutData.hero" />
    <AboutSection :content="aboutData.authorsSection" id="authors" />
  </main>
</template>

<script>
// @ is an alias to /src
import AboutSection from "@/components/AboutSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import about from "@/data/about";

export default {
  name: "AboutView",
  components: {
    AboutSection,
    HeroSection,
  },
  data() {
    return {
      aboutData: about,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as *;
</style>
