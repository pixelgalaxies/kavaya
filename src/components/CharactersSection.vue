<template>
  <section class="characters__section">
    <div class="container">
      <h2 class="heading">{{ content.name }}</h2>

      <p v-if="content.description != ''">{{ content.description }}</p>

      <ul class="characters__list">
        <li
          v-for="(characterItem, index) in content.people"
          :key="index"
          class="characters__item"
          @click="passToParent(characterItem)"
        >
          <h3 class="characters__name">{{ characterItem.name }}</h3>
          <img :src="characterItem.thumbnail" :alt="characterItem.name" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "CharactersSection",
  props: {
    content: Object,
  },
  data() {
    return {
      currentIndex: "0",
      currentGroup: "woa",
    };
  },
  methods: {
    passToParent(dataFromChild) {
      this.$emit("update-parent", dataFromChild);
      document.body.classList.add("overlay--open");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as *;

.characters {
  &__section {
    background-color: $dark;
    padding-inline: $gap;
  }

  &__list {
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: $gap;
  }

  &__item {
    grid-column: span 1;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      transition: all 0.33s linear;
    }

    &:hover,
    &:active,
    &:focus {
      &:before {
        background-color: rgba($dark, 0.8);
      }

      .characters__name {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      border-radius: 50%;
      background-color: $purple;
    }
  }

  &__name {
    position: absolute;
    inset: 0;
    width: 100%;
    padding-inline: $gap;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    opacity: 0;
    transition: all 0.33s linear;
  }
}
</style>
