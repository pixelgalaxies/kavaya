<template>
  <section class="hero">
    <div class="container">
      <h2 class="heading">{{ content.title }}</h2>
      <p>{{ content.copy }}</p>

      <a :href="content.btnHref" class="hero__btn">
        {{ content.btnText }}
      </a>
      <a :href="content.linkHref" class="hero__link">
        {{ content.linkText }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionHero",
  props: {
    content: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as *;

.hero {
  min-height: 60vh;
  padding-inline: $gap;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
