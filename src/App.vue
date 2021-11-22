 
<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-row justify="center"> <h4>v-system-bar</h4> </v-row>></v-system-bar
    >

    <v-app-bar app clipped-left>
      <v-row justify="center">
        <h4>v-app-bar</h4>
      </v-row></v-app-bar
    >

    <v-navigation-drawer app clipped left>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col><h4>v-navigation-drawer</h4></v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-main>
      <v-container fill-height>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="4">
            <h4>v-content</h4>
          </v-col>
        </v-row>
      </v-container>
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
  data: () => ({ drawer: null }),
};
</script>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
