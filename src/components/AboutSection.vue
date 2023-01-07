<template>
  <section id="authors" class="about__section">
    <div class="container">
      <h2 class="heading">{{ content.title }}</h2>

      <p v-if="content.copy != ''">{{ content.copy }}</p>

      <ul class="about__list authors">
        <li
          v-for="(authorItem, index) in content.authors"
          :key="index"
          class="authors__item"
        >
          <div class="authors__details">
            <h3 class="authors__heading">
              {{ authorItem.name }}
            </h3>

            <p class="authors__copy">
              {{ authorItem.copy }}
            </p>

            <ul
              v-if="authorItem.links.length > 0"
              class="about__list authors__links"
            >
              <li v-for="(linkItem, index) in authorItem.links" :key="index">
                <a :href="linkItem.linkHref" class="authors__link-item">
                  {{ linkItem.linkText }}
                </a>
              </li>
            </ul>
          </div>

          <div class="authors__image">
            <img :src="authorItem.image" :alt="authorItem.name" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    content: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as *;

.about {
  &__section {
    background-color: $dark;
    padding-inline: $gap;
  }
  &__list {
    padding: 0;
    list-style-type: none;
  }
}

.authors {
  &__item {
    display: flex;
    align-items: center;
    &:not(:last-of-type) {
      margin-bottom: 50px;
    }
  }

  &__details {
    width: 60%;
    padding-right: 30px;
  }

  &__heading {
    font-size: 36px;
    margin-bottom: $gap;
  }

  &__copy {
    margin-bottom: $gap;
  }

  &__image {
    width: 40%;
    img {
      width: 100%;
    }
  }

  &__link-item {
    color: $light;
    text-decoration: none;
  }
}
</style>
