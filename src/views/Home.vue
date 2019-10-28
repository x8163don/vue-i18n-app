<template>
  <div class="home">
    <h1 v-html="$t('home.headers.title')"></h1>
    <input :placeholder="$t('home.labels.placeholder')" />
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
