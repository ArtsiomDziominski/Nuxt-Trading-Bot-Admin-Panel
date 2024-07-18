<script setup lang="ts">
import {storeToRefs} from "pinia";
import {authStore} from "~/store/auth";
import {userStore} from "~/store/user";

const storeAuth = authStore();
const {userSignup} = storeToRefs(storeAuth);

const storeUser = userStore();
const {isAuthenticated} = storeToRefs(storeUser);

const router = useRouter();

const submit = async (): Promise<void> => {
  await storeAuth.requestSignupMail();
  if (isAuthenticated.value) await router.push('/main');
}
</script>

<template>
  <v-form fast-fail @submit.prevent="submit" class="form">
    <v-card
        color="secondary"
        class="mx-auto pa-8 card"
    >
      <v-card-title class="card__title">
        <p class="text-h4">Регистрация</p>
      </v-card-title>
      <v-card-item class="card__item">
        <v-text-field
            class="card__input"
            v-model="userSignup.login"
            label="Login"
            variant="outlined"
        ></v-text-field>
        <v-text-field
            v-model="userSignup.mail"
            label="Email address"
            placeholder="johndoe@gmail.com"
            type="email"
            variant="outlined"
        ></v-text-field>
        <v-text-field
            v-model="userSignup.password"
            hint="Enter your password to access this website"
            label="Password"
            type="password"
            variant="outlined"
        ></v-text-field>
        <p class="card__signup text-grey-lighten-2 text-caption">Уже зарегистрированы? <NuxtLink class="text-white" to="/login">Вход</NuxtLink></p>
      </v-card-item>

      <v-card-actions class="card__actions">
        <v-btn class="mt-2" type="submit">Зарегистрироваться</v-btn>
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