<template>
  <v-app class="myAppcontainer">
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>

    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
          ></v-app-bar-nav-icon>
        </div>
      </div>
    </v-app-bar>

    <v-main
      style="background: #fff"
      class="myCardContainer"
    >
      <div
        class="app-content-container boxed-container pa-6"
        style="padding-top: 0 !important;"
      >
        <slot></slot>
      </div>
    </v-main>
    <div class="mobileMenu">
      <div class="holder"><v-icon>{{ icons.mdiArrowUpDropCircle }}</v-icon></div>
      <div class="holder"><v-icon>{{ icons.mdiCreditCardOutline }}</v-icon></div>
      <div class="holder"><v-icon>{{ icons.mdiAccountCogOutline }}</v-icon></div>
      <div class="holder"><v-icon>{{ icons.mdiArrowUpCircle }}</v-icon></div>
      <div class="holder"><v-icon>{{ icons.mdiAccountCogOutline }}</v-icon></div>
    </div>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiMagnify,
  mdiBellOutline,
  mdiGithub,
  mdiArrowUpDropCircle,
  mdiCreditCardOutline,
  mdiAccountCogOutline,
  mdiArrowUpCircle,
} from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'

export default {
  components: {
    VerticalNavMenu,
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
        mdiArrowUpDropCircle,
        mdiCreditCardOutline,
        mdiAccountCogOutline,
        mdiArrowUpCircle,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.mobileMenu {
  display: none;
}
@media screen and (max-width: 600px) {
  .myAppcontainer {}
  .myCardContainer {
    padding-top: 5px !important;
  }
  .myCardContainer ::v-deep .app-content-container {
    padding: 0px !important;
    background: #0c365a;
  }
  .myAppcontainer ::v-deep .v-app-bar {
    display: none;
  }
  .mobileMenu {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 60px;
    z-index: 999;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  }
  .mobileMenu .holder{
    width: 20%;
    text-align: center;
  }
}
</style>
