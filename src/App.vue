<template>
  <article id="app">
    <Head />


    <router-view/>

    <Foot />
  </article>
</template>

<script>
  import Head from '@/components/Head'
  import Foot from '@/components/Foot'
  
  export default {
    
    components: {
      Head,
      Foot
    },
  }
</script>

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



    /* Voor mobile port */
    @media screen and (max-width: 420px){
      #app{
        background-color: #ff00ff;
        height: auto;

      }

    
    }
</style>
