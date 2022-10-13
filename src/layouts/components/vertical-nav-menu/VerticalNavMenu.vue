<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="360"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/logos/aspire-green.svg')"
          max-height="50px"
          max-width="150px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
      </router-link>
    </div>
    <p style="margin: 0;padding: 0 48px;font-size: 13px;letter-spacing: 1px;color: #ccc;">
        Trusted way of banking for 3,000+<br>
        SMEs and startups in Singapore
      </p>
    <!-- Navigation Items -->
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items"
    >
      <nav-menu-link
        title="Home"
        :to="{ name: 'home' }"
        :icon="icons.mdiArrowUpDropCircle"
      ></nav-menu-link>
      <nav-menu-link
        title="Cards"
        :to="{ name: 'cards1'}"
        :icon="icons.mdiCreditCardOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Payments"
        :to="{ name: 'payments'}"
        :icon="icons.mdiAccountCogOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Credit"
        :to="{ name: 'credit'}"
        :icon="icons.mdiArrowUpCircle"
      ></nav-menu-link>
      <nav-menu-link
        title="Settings"
        :to="{ name: 'settings'}"
        :icon="icons.mdiAccountCogOutline"
      ></nav-menu-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiArrowUpDropCircle,
  mdiArrowUpCircle,
} from '@mdi/js'

// import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
// import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    // NavMenuSectionTitle,
    // NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
        mdiArrowUpDropCircle,
        mdiArrowUpCircle,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  background: #0c365a!important;
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.app-navigation-menu ::v-deep .v-list-item__title {
  color: #fff !important;
}
.app-navigation-menu ::v-deep .theme--light.v-icon {
  color: #fff !important;
}
.vertical-nav-header {
  padding: 48px !important;
}
.vertical-nav-menu-items {
  padding: 48px !important;
}
.app-navigation-menu ::v-deep .v-list-item {
  letter-spacing: 1px;
  font-weight: 300;
}
.app-navigation-menu ::v-deep .v-list-item {
  padding: 10px 16px;
}
</style>
