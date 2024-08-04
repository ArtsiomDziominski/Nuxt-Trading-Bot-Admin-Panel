<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usersStore } from '~/store/clients';
import { headersClients } from '~/const/headers';

const storeUsers = usersStore();
const { clientList, isLoadingClientList, clientPages, clientTotal } = storeToRefs(storeUsers);

onMounted(() => storeUsers.requestClients());

const loadItems = ({ page, itemsPerPage }: COMMON.DataTableServerLoadItems): void => {
	storeUsers.setClientsRequestParams(page, itemsPerPage);
};
</script>

<template>
	<v-data-table-server
		:headers="headersClients"
		:items="clientList"
		:items-length="clientTotal"
		:loading="isLoadingClientList"
		item-value="name"
		@update:options="loadItems"
	/>
</template>

<style scoped lang="scss">

</style>
