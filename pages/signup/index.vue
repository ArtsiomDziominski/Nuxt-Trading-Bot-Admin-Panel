<script setup lang="ts">
const registrationMethods = [
  {
    title: 'Mail',
    value: '/signup/mail',
    props: {
      appendIcon: '$next',
    },
  },
  {
    title: 'Wallets',
    value: '/signup/wallet',
    props: {
      appendIcon: '$next',
    },
  }
];

const to = (item: {id: string}): void => {
  navigateTo(item.id);
}
</script>

<template>
  <div class="reg-wrapper">
    <v-card class="mx-auto card">
      <v-list class="list" :items="registrationMethods" @click:select="to">
      </v-list>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.reg-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 400px;

    .list {
      &__title {
        padding: 6px 14px;
      }
    }
  }
}
</style>