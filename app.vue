<template>
  <NuxtLayout>
    <section class="pages">
<!--      <MainHeader/>-->
      <main>
        <NuxtPage></NuxtPage>
      </main>
<!--      <MainFooter/>-->
<!--      <AppSnackbar />-->
    </section>
  </NuxtLayout>
</template>
<script setup lang="ts">
// import MainHeader from "~/components/header/MainHeader.vue";
// import MainFooter from "~/components/footer/MainFooter.vue";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
// import {userStore} from "./store/userStore";
// import AppSnackbar from "~/components/AppSnackbar.vue";
// const store = userStore();
// const {isMainLoader} = storeToRefs(store);

// onMounted(async () => {
//   isMainLoader.value = true;
//   isMainLoader.value = false;
// })
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
