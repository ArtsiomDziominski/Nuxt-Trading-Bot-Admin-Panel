<script setup lang="ts">
import { headerButtons } from '~/const/header';
</script>

<template>
	<v-btn
		v-for="button in headerButtons"
		variant="outlined"
		:to="button.to"
	>
		{{ button.title }}
	</v-btn>
</template>

<style scoped lang="scss">

</style>
