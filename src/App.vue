<template>
  <div class="mainapp">
    <header class="mainapp-header">
      <h1>QianKun</h1>
      <ul class="mainapp-menu">
        <li @click="handleClick('/vue')">vue</li>
        <li @click="handleClick('/react')">react</li>
      </ul>
    </header>
    <div class="mainapp-main">
      <div v-show="loading">loading...</div>
      <div id="subapp-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
  methods: {
    handleClick(subapp) {
      history.pushState(null, subapp, subapp);
    },
  },
};
</script>
