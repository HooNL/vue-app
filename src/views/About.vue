<template>
  <article class="about">
    <h1>This is an about page</h1>
    <br>
    <hr>
    <Textt />
    <br>
    <hr>
    <Yek />
    <br>
    
  </article>
</template>

<script>
import Yek from '@/components/Yek.vue'
import Textt from '@/components/Textt.vue'

export default {
  name: "About",

  components: {
    Yek,
    Textt
  }
}
</script>


<style scoped>

  article{
    height: auto;
  }

  
  
</style>
