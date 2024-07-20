<script setup lang="ts">

</script>

<template>
  <v-app>
    <div class="app">
      <LayoutHeader/>
      <main class="page">
        <slot/>
      </main>
    </div>
  </v-app>

</template>

<style scoped lang="scss">
.app {
  display: grid;
  grid-template-rows: 64px calc( 100vh - 64px) min-content;
  grid-template-columns: 100%;

  .page {
    grid-area: 2/1/3/2;
  }
}
</style>