<script setup lang="ts">
import {storeToRefs} from "pinia";
import {authStore} from "~/store/auth";

const storeAuth = authStore();
const {userLogin} = storeToRefs(storeAuth);

const submit = (): void => {
  storeAuth.requestLogin();
}
</script>

<template>
  <v-form fast-fail @submit.prevent="submit" class="form">
    <v-card
        color="secondary"
        class="mx-auto pa-8 card"
    >
      <v-card-title class="card__title">
        <p class="text-h4">Вход</p>
      </v-card-title>
      <v-card-item class="card__item">
        <v-text-field
            class="card__input"
            v-model="userLogin.mail"
            label="Email address"
            placeholder="johndoe@gmail.com"
            type="email"
            variant="outlined"
            required
        ></v-text-field>

        <v-text-field
            class="card__input"
            v-model="userLogin.password"
            hint="Enter your password to access this website"
            label="Password"
            type="password"
            variant="outlined"
        ></v-text-field>
      </v-card-item>

      <v-card-actions class="card__actions">
        <v-btn class="mt-2" type="submit" block>Войти</v-btn>
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