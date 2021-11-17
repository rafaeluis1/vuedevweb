<template>
  <v-app>
    <v-system-bar app height="20"
      ><v-row justify="center">
        <h4>v-system-bar</h4>
      </v-row>
    </v-system-bar>
    <v-app-bar app>
      <v-row justify="center">
        <h4>v-app-bar</h4>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer v-model="drawer">
        <v-col class="text-center">
          <h4 justify="center">v-navigation-drawer</h4>
        </v-col>
      </v-navigation-drawer>
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
  name: "App",

  data: () => ({
    //
  }),
};
</script>
