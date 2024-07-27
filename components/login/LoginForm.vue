<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { authStore } from '~/store/auth';
import { userStore } from '~/store/user';

const storeAuth = authStore();
const { userLogin, errors } = storeToRefs(storeAuth);

const storeUser = userStore();
const { isAuthenticated } = storeToRefs(storeUser);

const router = useRouter();

const submit = async (): Promise<void> => {
	if (storeAuth.checkValidationLoginForm() && storeAuth.checkValidationPasswordForm()) return;
	await storeAuth.requestLogin();
	if (isAuthenticated.value) await router.push('/main');
};

const blurMail = async (): Promise<void> => {
	errors.value.mail.message = '';
	if (userLogin.value.mail) storeAuth.checkValidationLoginForm();
};

const blurPassword = async (): Promise<void> => {
	errors.value.password.message = '';
	if (userLogin.value.password) storeAuth.checkValidationPasswordForm();
};

const isDisabledBtn = computed((): boolean => {
	return !!errors.value.mail.message && !!errors.value.password.message;
});
</script>

<template>
	<v-form
		fast-fail
		class="form"
		@submit.prevent="submit"
	>
		<v-card
			color="secondary"
			class="mx-auto pa-8 card"
		>
			<v-card-title class="card__title">
				<p class="text-h4">
					Вход
				</p>
			</v-card-title>
			<v-card-item class="card__item">
				<v-text-field
					v-model="userLogin.mail"
					class="card__input"
					label="Email address"
					placeholder="johndoe@gmail.com"
					type="email"
					variant="outlined"
					:error-messages="errors.mail.message"
					@blur="blurMail"
				/>

				<v-text-field
					v-model="userLogin.password"
					class="card__input"
					hint="Enter your password to access this website"
					label="Password"
					type="password"
					variant="outlined"
					:error-messages="errors.password.message"
					@blur="blurPassword"
				/>
			</v-card-item>

			<v-card-actions class="card__actions">
				<v-btn
					class="mt-2"
					type="submit"
					block
					:disabled="isDisabledBtn"
				>
					Войти
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-form>
</template>

<style scoped lang="scss">
.form {
  width: 100%;

  .card {
    min-width: 300px;
    max-width: 600px;
    width: 100%;

    &__title {
      display: flex;
      justify-content: center;
    }

    &__input {
      padding: 6px 0;
    }

    &__actions {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
