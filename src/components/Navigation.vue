<template>
  <header>
    <nav class="nav container">
      <span class="nav__logo">LOGO</span>
      <ul class="nav__list">
        <li v-for="item in links" :key="item.linkText" class="nav__item">
          <router-link :to="item.linkHref">{{ item.linkText }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainNavigation",
  props: {
    links: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as *;

.splash {
  header {
    position: fixed;
    z-index: 100;
    top: 0;

    @media (min-width: $lg) {
      width: 50%;
    }
  }
}

header {
  width: 100%;
  padding: 10px 20px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    font-size: 24px;
    color: $light;
  }

  &__list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__item {
    color: $light;

    &:not(:last-of-type) {
      margin-bottom: 20px;

      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 20px;
      }
    }

    a {
      color: $light;
      text-decoration: none;
      transition: all 0.33s ease-in-out;

      &.router-link-exact-active {
        color: $yellow;
      }

      &:hover,
      &:active,
      &:focus {
        color: $yellow;
      }
    }
  }
}
</style>
