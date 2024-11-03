<template>
	<div>
		<p>WS</p>
		<v-data-table-server
			:headers="headers"
			:items="systemWSList"
			:items-length="systemWSList.length"
			:loading="isLoaderSystemWSList"
		/>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { systemStore } from '~/store/system';

const storeSystem = systemStore();
const { systemWSList, isLoaderSystemWSList } = storeToRefs(storeSystem);

const headers = [
	{ title: 'User id', align: 'start', sortable: false, key: 'userId' },
	{ title: 'type', key: 'type', sortable: false, align: 'start' },
	{ title: 'create', key: 'create', sortable: false, align: 'start' },
];
</script>

<style scoped lang="scss">

</style>
