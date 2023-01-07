<template>
  <main class="about">
    <HeroSection :content="characterData.hero" />
    <CharactersSection
      :content="characterData.woa"
      id="woa"
      @update-parent="updateOverlay"
    />
    <CharactersSection
      :content="characterData.oob"
      id="oob"
      @update-parent="updateOverlay"
    />
    <CharactersSection
      :content="characterData.hog"
      id="hog"
      @update-parent="updateOverlay"
    />
    <CharactersSection
      :content="characterData.misc"
      id="misc"
      @update-parent="updateOverlay"
    />
    <div class="overlay">
      <i class="close-icon--main" @click="closeOverlay()">[X] CLOSE</i>
      <div class="overlay__inner">
        <img :src="overlayData.image" alt="" />
        <span class="overlay__pronounciation">
          {{ overlayData.pronounciation }}
        </span>
        <div class="overlay__details">
          <span v-if="overlayData.nickname != ''">
            aka {{ overlayData.nickname }}
          </span>
          <span>{{ overlayData.age }}</span>
          <span>{{ overlayData.gift }}</span>
        </div>
        <p>{{ overlayData.description }}</p>
        <i class="close-icon--secondary" @click="closeOverlay()">[X] CLOSE</i>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import CharactersSection from "@/components/CharactersSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import characters from "@/data/characters";

export default {
  name: "AboutView",
  components: {
    CharactersSection,
    HeroSection,
  },
  data() {
    return {
      characterData: characters,
      overlayData: {},
    };
  },
  methods: {
    updateOverlay: function (dataFromChild) {
      this.overlayData = dataFromChild;
    },
    closeOverlay: function () {
      document.body.classList.remove("overlay--open");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as *;

.overlay {
  display: none;
  inset: 0;
  min-height: 100vh;
  overflow-y: scroll;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
  padding: $gap;

  &__inner {
    max-width: 768px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    // aspect-ratio: 1 / 1;
    transition: all 0.33s linear;

    &:hover,
    &:active,
    &:focus {
      filter: drop-shadow(0px 5px 25px #fff);
    }
  }

  &__pronounciation {
    margin-bottom: $gap;
  }

  &__details {
    display: flex;
    justify-content: center;
    margin-bottom: $gap;

    @media (min-width: $lg) {
      padding-inline: 100px;
    }

    span {
      padding-inline: $gap;
      &:not(:last-of-type) {
        border-right: 1px solid $light;
      }
    }
  }

  .close-icon {
    &--main {
      position: absolute;
      right: $gap;
    }
  }
}

.overlay--open {
  .overlay {
    position: fixed;
    display: block;
  }
}
</style>
