<template>
  <div class="about">
    <h1>{{ getTitle }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    getTitle() {
      return this._i18n.t("about.headers.title", { name: this.name });
    }
  },
  data() {
    return {
      name: "Bevis"
    };
  }
};
</script>
