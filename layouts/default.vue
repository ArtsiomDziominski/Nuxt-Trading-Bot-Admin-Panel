<script setup lang="ts">

</script>

<template>
	<v-app>
		<div class="app">
			<LayoutHeader class="header" />
			<main class="page">
				<slot />
			</main>
			<LayoutFooter class="footer" />
		</div>
	</v-app>
</template>

<style scoped lang="scss">
.app {
  max-width: 1920px;
  align-self: center;
  display: grid;
  grid-template-rows: 64px calc( 100vh - 64px) min-content;
  grid-template-columns: 100%;
  margin: 0 30px;

  .header {
    grid-area: 1/2/1/2;
  }

  .page {
    margin: 50px 0 50px 0;
    grid-area: 2/1/3/2;
  }

  .footer {
    grid-area: 3/1/4/2;
  }
}
</style>
