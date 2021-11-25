 
<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-row justify="center"> <h4>v-system-bar</h4> </v-row>>
    </v-system-bar>

    <v-app-bar app clipped-left>
      <v-row justify="center">
        <v-btn v-for="link in links" :key="link.title" :to="link.to" text>
          {{ link.title }}
        </v-btn>
      </v-row></v-app-bar
    >

    <v-navigation-drawer app clipped left>
      <v-list>
        <v-list-item v-for="link in links" :key="link.title" :to="link.to" link>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
      <!-- <v-container fill-height>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="4">
            <h4>v-content</h4>
          </v-col>
        </v-row>
      </v-container> -->
    </v-main>

    <v-footer app padless>
      <v-col class="text-center" cols="12">
        <h4>v-footer</h4>
      </v-col>
    </v-footer>
    <v-bottom-navigation app v-model="value">
      <h4>v-bottom-navigation</h4>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { title: "Home", to: "/" },
      { title: "Sign-up", to: "/signup" },
      { title: "About", to: "/about" },
      { title: "Contact", to: "/contact" },
    ],
  }),
};
</script>
