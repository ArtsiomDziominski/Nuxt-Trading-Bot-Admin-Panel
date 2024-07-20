<script setup lang="ts">
import {localStorageKeyTheme, themeDark, themeLight} from "~/const/theme";
import {useTheme} from "vuetify";

const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? themeLight : themeDark;
  localStorage.setItem(localStorageKeyTheme, theme.global.name.value);
}
</script>

<template>
  <v-app-bar scroll-behavior="elevate">
    <template v-slot:prepend>
      <v-icon icon="$vuetify"></v-icon>
    </template>

    <v-app-bar-title>Application Bar</v-app-bar-title>
    <v-btn @click="toggleTheme">{{ theme.global.current.value.dark ? 'light' : 'dark' }}</v-btn>
  </v-app-bar>
</template>

<style scoped lang="scss">

</style>