<script setup lang="ts">
import LoginForm from "~/components/login/LoginForm.vue";
</script>

<template>
  <div class="login-wrapper">
    <LazyLoginForm/>
  </div>
</template>

<style scoped lang="scss">
.login-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>