<template>
  <div id="app">
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "node_modules/govuk-frontend/govuk/all";

* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100vh;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  max-width: 600px;
  height: auto;
}
</style>
