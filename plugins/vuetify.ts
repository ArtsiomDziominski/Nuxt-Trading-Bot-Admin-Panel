import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import type { ThemeDefinition } from 'vuetify';
import { createVuetify, useTheme } from 'vuetify';
import { themeLight } from '~/const/theme';

const light: ThemeDefinition = {
	dark: false,
	colors: {
		secondary: '#03DAC6',
	},
};

const dark: ThemeDefinition = {
	dark: true,
	colors: {
		secondary: '#ab03da',
	},
};

export default defineNuxtPlugin((nuxt) => {
	const defaultTheme = import.meta.client ? localStorage.getItem('theme') || themeLight : themeLight;
	const vuetify = createVuetify({
		ssr: true,
		components,
		directives,
		theme: {
			defaultTheme,
			themes: {
				light,
				dark,
			},
		},
	});
	nuxt.vueApp.use(vuetify);
});
