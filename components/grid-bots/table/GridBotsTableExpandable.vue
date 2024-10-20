<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { gridBotsStore } from '~/store/grid-bots';
import { BotActive, BotSide, BotStatus, BotTypes } from '~/const/bots';

defineProps({
	item: {
		type: Object as PropType<GRID_BOTS.GridBots>,
		default: () => {},
	},
});

const storeGridBots = gridBotsStore();
const { isLoadingChangeWatchingGridBot } = storeToRefs(storeGridBots);

const isLoading = ref<Record<string, boolean>>({});

const changeWatchingGridBot = async (symbol: string, apiId: string | undefined, status: BotStatus) => {
	isLoading.value = { ...isLoading.value, [status]: true };
	await storeGridBots.requestChangeWatchingGridBot(symbol, apiId, status);
	isLoading.value = { ...isLoading.value, [status]: false };
};
</script>

<template>
	<div class="d-flex flex-wrap">
		<v-card
			v-for="cryptoPair in item.cryptoPair"
			:key="cryptoPair.params.symbol"
			class="bg-red mx-auto card ma-4"
			:class="cryptoPair?.params.side === BotSide.Buy ? 'bg-green' : 'bg-red'"
			:subtitle="cryptoPair.params.side"
			width="400"
			border="2"
		>
			<template #title>
				<div class="d-flex justify-space-between">
					<span>{{ cryptoPair.params.symbol }}</span>
					<span class="red">{{ cryptoPair.isActive ? BotActive.Active : BotActive.NotActive }}</span>
				</div>
			</template>

			<v-card-text class="bg-surface-light card__body">
				<span>price: {{ cryptoPair.params.price || BotTypes.Market }}</span>
				<span> step: {{ cryptoPair.params.step }}%</span>
				<span>decimals: {{ cryptoPair.params.decimals }}</span>
				<span>qty: {{ cryptoPair.params.qty }}</span>
				<span>qtyOpenOrders: {{ cryptoPair.params.qtyOpenOrders }}</span>
				<span>stepRevers: {{ cryptoPair.params.stepRevers }}</span>
				<span>strategy: {{ cryptoPair.params.strategy }}</span>
			</v-card-text>

			<v-card-actions class="bg-surface-light">
				<v-btn
					v-if="cryptoPair.isActive"
					icon="mdi-stop-circle-outline"
					color="yellow"
					:loading="isLoadingChangeWatchingGridBot && isLoading[BotStatus.Pause]"
					@click="changeWatchingGridBot(cryptoPair.params.symbol, item.api.id, BotStatus.Pause)"
				/>
				<v-btn
					v-else
					icon="mdi-play-circle-outline"
					color="green"
					:loading="isLoadingChangeWatchingGridBot && isLoading[BotStatus.Start]"
					@click="changeWatchingGridBot(cryptoPair.params.symbol, item.api.id, BotStatus.Start)"
				/>
				<v-btn
					icon="mdi-close-circle-outline"
					color="red"
					:loading="isLoadingChangeWatchingGridBot && isLoading[BotStatus.Stop]"
					@click="changeWatchingGridBot(cryptoPair.params.symbol, item.api.id, BotStatus.Stop)"
				/>
			</v-card-actions>
		</v-card>
	</div>
</template>

<style scoped lang="scss">
.card__body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 16px;
}
</style>
