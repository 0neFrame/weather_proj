<template>
  <div id="app">
    <weather />
  </div>
</template>

<script>
  import weather from "./page/weather.vue";

  export default {
    name: "App",
    components: { weather },
  };
</script>
