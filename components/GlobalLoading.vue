<script setup lang="ts">

</script>

<template>
	<div class="wrapper-loading">
		<v-progress-circular
			:size="70"
			:width="7"
			color="purple"
			indeterminate
		/>
	</div>
</template>

<style scoped lang="scss">
.wrapper-loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
