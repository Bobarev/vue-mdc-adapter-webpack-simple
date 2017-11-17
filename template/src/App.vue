<template>
  <div id="app">

    <!--Toolbar with icon menu-->
    <mdc-toolbar>
      <mdc-toolbar-row>
        <mdc-toolbar-section align-start >
          <mdc-toolbar-menu event="toggle-drawer">
          </mdc-toolbar-menu>
          <mdc-toolbar-title href="#">Title</mdc-toolbar-title>
        </mdc-toolbar-section>
        <mdc-toolbar-section align-end>
          <mdc-toolbar-icon event="show-help" icon="help"></mdc-toolbar-icon>
        </mdc-toolbar-section>
      </mdc-toolbar-row>
    </mdc-toolbar>

    <!-- Drawer layout-->
    <mdc-drawer-layout>

      <!-- Drawer-->
      <mdc-drawer toggle-on="toggle-drawer">
        <mdc-drawer-list>
          <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
          <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
          <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
        </mdc-drawer-list>
      </mdc-drawer>

      <!--Body markup here... -->

    </mdc-drawer-layout>

    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>Material Components</h2>
    <ul>
      <li><a href="https://www.material.io/" target="_blank">Material Design</a></li>
      <li><a href="https://github.com/material-components/material-components-web" target="_blank">material-components-web
</a></li>
      <li><a href="https://github.com/stasson/vue-mdc-adapter" target="_blank">vue-mdc-adapter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Material App'
    }
  }
}
</script>

<style lang="scss">
$mdc-theme-primary: #9c27b0;
$mdc-theme-accent: #76ff03;
$mdc-theme-background: #fff;
// File to import not found or unreadable: vue-mdc-adapter/components/styles.
// @import "vue-mdc-adapter/components/styles";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
