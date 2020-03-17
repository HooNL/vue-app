<template>
  <article id="app">
    <nav id="nav" class="sticky-top navbar navbar-dark bg-dark p-4">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </article>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

#nav {
  padding: 30px;
  
}
  a {
    font-weight: bold;
    color: #2c3e50;

  }


   .router-link-exact-active {
      color: #42b983;
    }
</style>
