<template>
  <article class="home">
    <!-- <section>
       <img class="img-fluid" alt="Vue logo" src="../assets/img/Land2.jpg">
    </section> -->
   <Land class="land"/>
  </article>
</template>

<script>
// @ is an alias to /src
import Land from '@/components/Land.vue'

export default {
  name: 'Home',
  components: {
    Land
  }
}
</script>


<style scoped>
  article{
    text-align: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 5px 75px;
  }

  .land{
    position: relative;
    width: 1000px;
    background-color: #b0a7a7;
    
  }
</style>
