<script setup lang="ts">
</script>

<template>
	<v-footer class="text-center d-flex flex-column">
		<div>
			<v-btn
				v-for="icon in icons"
				:key="icon"
				:icon="icon"
				class="mx-4"
				variant="text"
			/>
		</div>

		<div class="pt-0">
		</div>

		<v-divider />

		<div>
			{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
		</div>
	</v-footer>
</template>

<style scoped lang="scss">

</style>
