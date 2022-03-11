<template>
  <nav>
    <v-app-bar clipped-left app dark>
      <v-toolbar-title class="font-weight-bold text-h4"
        >GAMM2022</v-toolbar-title
      >
      <v-toolbar-title link router to="/" class="font-weight-light text-h4"
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
      <!-- <v-switch v-model="$vuetify.theme.dark" label="Dark mode"></v-switch> -->
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>