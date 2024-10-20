<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { headersGridBots } from '~/const/headers';
import { gridBotsStore } from '~/store/grid-bots';

const storeGridBots = gridBotsStore();
const { gridBotsList, gridBotsTotal, isLoadingGridBotsList, gridBotsTotalGridBots, gridBotsTotalGridBotsActive, gridBotsTotalGridBotsNotActive } = storeToRefs(storeGridBots);

const loadItems = ({ page, itemsPerPage }: COMMON.DataTableServerLoadItems): void => {
	storeGridBots.setGridBotsRequestParams(page, itemsPerPage);
};

const getGridBotsSymbol = (cryptoPair: GRID_BOTS.GridBotsCryptoPair[]) => {
	return cryptoPair?.slice(0, 4)?.map(item => (item.params.symbol)).join(', ');
};
</script>

<template>
	<v-data-table-server
		:headers="headersGridBots"
		:items="gridBotsList"
		:items-length="gridBotsTotal"
		:loading="isLoadingGridBotsList"
		item-value="name"
		show-expand
		@update:options="loadItems"
	>
		<template #top>
			<v-toolbar flat>
				<v-toolbar-title>Grid bots | Users: {{ gridBotsTotal }} | Bots: {{ gridBotsTotalGridBots }} | Active Bots: {{ gridBotsTotalGridBotsActive }} | Not Active Bots: {{ gridBotsTotalGridBotsNotActive }}</v-toolbar-title>
			</v-toolbar>
		</template>
		<template #item.login="{ item }">
			<v-tooltip :text="item.user.roles">
				<template #activator="{ props }">
					<span v-bind="props">{{ item.user.login }}</span>
				</template>
			</v-tooltip>
		</template>
		<template #item.gridBots="{ item }">
			{{ getGridBotsSymbol(item?.cryptoPair) }}
			<v-chip v-if="item?.cryptoPair.length > 4">
				+ {{ item?.cryptoPair?.slice(4).length }}
			</v-chip>
		</template>
		<template #item.untilSubscription="{ item }">
			{{ item.user.untilSubscription }}
		</template>
		<template #expanded-row="{ columns, item }">
			<tr>
				<td :colspan="columns.length">
					<GridBotsTableExpandable :item="item" />
				</td>
			</tr>
		</template>
	</v-data-table-server>
</template>

<style scoped lang="scss">

</style>
