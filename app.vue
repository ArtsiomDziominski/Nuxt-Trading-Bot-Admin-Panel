<template>
  <NuxtLayout>
    <section class="pages">
<!--      <MainHeader/>-->
      <v-btn @click="toggleTheme">{{ theme.global.name.value  }}</v-btn>
      <main>
        <NuxtPage></NuxtPage>
      </main>
<!--      <MainFooter/>-->
<!--      <AppSnackbar />-->
    </section>
  </NuxtLayout>
</template>
<script setup lang="ts">
import {useTheme} from "vuetify";
import {themeLight, themeDark, localStorageKeyTheme} from "~/const/theme";

const theme = useTheme();

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? themeLight : themeDark;
  localStorage.setItem(localStorageKeyTheme, theme.global.name.value);
}
</script>

<style lang="scss">

.pages {
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
}

main {
  min-height: 100vh;
  height: 100vh;
}
</style>
