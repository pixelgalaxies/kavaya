<template>
  <main
    class="home"
    :style="
      'background-image: url(' + globalData.splash[this.randomNum].image + ')'
    "
  >
    <div class="home__content">
      <h1 class="home__heading">Tales Of Kavaya</h1>
      <h2 class="home__subheading">
        {{ globalData.splash[this.randomNum].copy }}
      </h2>
      <div class="home__links">
        <router-link
          :to="globalData.splashBtn.linkHref"
          class="home__btn home__cta"
        >
          {{ globalData.splashBtn.linkText }}
        </router-link>
        <router-link
          :to="globalData.splashLink.linkHref"
          class="home__cta home__cta--sub"
        >
          Read Now >
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import global from "@/data/global";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      globalData: global,
      randomNum: this.getRandomNum(),
    };
  },
  methods: {
    getRandomNum: function () {
      return Math.floor(Math.random() * 7);
    },
  },
  beforeCreate: function () {
    document.body.classList.add("splash");
  },
  destroyed: function () {
    document.body.classList.remove("splash");
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as *;

.construction {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
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

.home {
  background-image: url("https://www.talesofkavaya.com/assets/images/indexSplash/2.jpg");
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;

  @media (min-width: $lg) {
    background-size: cover;
    background-position: 0%;
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba($dark, 60%);
  }

  &__content {
    width: 100%;
    min-height: 400px;
    height: calc(100vh - 200px);
    background-color: $dark;
    position: relative;
    z-index: 10;
    top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 25px 50px;
    color: $light;

    @media (min-width: $lg) {
      width: 50%;
      height: 100vh;
      top: 0;
      text-align: left;
    }
  }

  &__heading {
    font-size: 48px;
    font-family: "Amatic SC", cursive;
    margin-bottom: 25px;

    @media (min-width: $lg) {
      font-size: 96px;
    }
  }

  &__subheading {
    font-size: 18px;
    margin-bottom: 50px;

    @media (min-width: $lg) {
      font-size: 28px;
    }
  }

  &__links {
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (min-width: $sm) {
      flex-direction: row;
    }
  }

  &__btn {
    height: 50px;
    width: 100%;
    text-decoration: none;
    margin-bottom: 15px;

    @media (min-width: $sm) {
      height: 75px;
      width: 250px;
      margin-bottom: 0;
    }

    @media (min-width: $xl) {
      width: 300px;
    }
  }

  &__cta {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $yellow;
    color: $dark;
    text-transform: uppercase;
    font-size: 24px;
    font-family: "Amatic SC", cursive;

    @media (min-width: $md) {
      font-size: 28px;
    }

    @media (min-width: $xl) {
      font-size: 36px;
    }

    &:not(:last-of-type) {
      @media (min-width: $sm) {
        margin-right: 35px;
      }
    }

    &--sub {
      color: $yellow;
      background-color: transparent;
    }
  }
}
</style>
