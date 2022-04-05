<template>
  <nav>
    <v-app-bar clipped-left app dark>
      <v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        class="font-weight-bold text-h4"
        @click="$router.push('/')"
        >GAMM2022</v-toolbar-title
      >
      <v-toolbar-title
        link
        router
        to="/"
        class="font-weight-light text-h4"
        @click="$router.push('/')"
        >DASHBOARD</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn href="https://jahrestagung.gamm-ev.de/" target="_blank" text>
        <span class="font-weight-black">GAMM</span>
        <span class="font-weight-light">2022</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        href="https://www.conftool.org/gamm2022/index.php"
        target="_blank"
        text
      >
        <span class="font-weight-black">CONF</span>
        <span class="font-weight-light">TOOL</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <!--  Side Drawer -->
    <v-navigation-drawer clipped class="grey lighten-3" v-model="drawer" app>
      <Countdown />
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link router to="/">
          <v-list-item-icon>
            <v-icon class="large">mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-subtitle-1">
            Dashboard
          </v-list-item-title>
        </v-list-item>
        <v-list-item link router to="map">
          <v-list-item-icon>
            <v-icon class="large">mdi-map</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-subtitle-1"> Map </v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2 text-center">
          <v-btn icon><v-icon large>mdi-github</v-icon></v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Countdown from "./Countdown.vue";
export default {
  name: "Navbar",
  components: { Countdown },
  data() {
    return {
      drawer: true,
    };
  },
};
</script>