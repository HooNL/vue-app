<template>
  <article id="app">
    <Head />

    <main>
      <router-view />
    </main>

    <Foot class="foot" />
  </article>
</template>

<script>
import Head from "@/components/Head";
import Foot from "@/components/Foot";

export default {
  components: {
    Head,
    Foot
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0 0 20px 0;
  overflow: auto;
  overflow-x: hidden;
  height: 100%;
}

#nav {
  color: #000;
  padding: 15px;
}

.a {
  font-weight: bold;
  color: #000;
  font-size: 25px;
  margin: auto 15px;
  padding: 10px;
}

.a:hover {
  text-decoration: none;
  border: 1px solid #000;
  padding: 4px;
  color: rgb(146, 56, 24);
  border-radius: 7px;
  background-clip: content-box;
  transition: all ease-in-out 0.5s;
}

.router-link-exact-active {
  color: #fff;
}

.foot {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: auto;
}

/* Voor mobile port */
@media(max-width: 500px) {
  #app {
    background-color: #f4f4f4;
    height: 100%;
  }

  .a {
    font-weight: bold;
    color: #000;
    font-size: 25px;
    margin: auto 15px;
    padding: 10px;
  }

  .a:hover {
    text-decoration: none;
    border: 1px solid #000;
    padding: 6px;
    color: rgb(243, 243, 243);
    border-radius: 7px;
    background-clip: content-box;
    transition: all ease-in-out 0.5s;
  }

  .router-link-exact-active {
    color: #fff;
  }

  /*  .foot{
        padding: 10px;
        background-color: rgb(255, 255, 255);
      }
 */
}
</style>
