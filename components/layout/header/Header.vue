<script setup lang="ts">
import { useTheme } from 'vuetify';
import { storeToRefs } from 'pinia';
import { localStorageKeyTheme, themeDark, themeLight } from '~/const/theme';
import HeaderButtons from '~/components/layout/header/HeaderButtons.vue';
import HeaderAccount from '~/components/layout/header/HeaderAccount.vue';
import { userStore } from '~/store/user';

const storeUser = userStore();
const { isAuthenticated } = storeToRefs(storeUser);

const theme = useTheme();
function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? themeLight : themeDark;
	localStorage.setItem(localStorageKeyTheme, theme.global.name.value);
}
</script>

<template>
	<v-app-bar
		scroll-behavior="elevate"
		class="app-bar"
	>
		<template #prepend>
			<v-icon icon="mdi-finance" />
		</template>

		<v-app-bar-title>
			<div class="title">
				Admin panel "Crypto Trading"
				<div
					class="buttons d-none d-md-flex"
				>
					<header-buttons v-if="isAuthenticated" />
				</div>
			</div>
		</v-app-bar-title>
		<template #append>
			<div class="append">
				<v-btn
					icon=""
					@click="toggleTheme"
				>
					<v-icon>
						{{ theme.global.current.value.dark ? 'mdi-lightbulb-outline' : 'mdi-lightbulb-on-outline' }}
					</v-icon>
				</v-btn>
				<header-account
					v-if="isAuthenticated"
					class="account"
				/>
			</div>
		</template>
	</v-app-bar>
</template>

<style scoped lang="scss">
.app-bar {
  padding: 0 20px;

  .append {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;

  .buttons {
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    gap: 20px;
  }
}
</style>
