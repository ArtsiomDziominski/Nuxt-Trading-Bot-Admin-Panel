<template>
  <NuxtLayout>
    <GlobalLoading v-if="isLoading" />
    <section v-else class="pages">
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
import GlobalLoading from "~/components/GlobalLoading.vue";

const theme = useTheme();

const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false;
})

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
