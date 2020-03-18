<template>
  <article class="home">
    <!-- <section>
       <img class="img-fluid" alt="Vue logo" src="../assets/img/Land2.jpg">
    </section> -->
    <Land />

  </article>
</template>

<script>
// @ is an alias to /src
import Land from "@/components/Land.vue"

export default {
  name: "Home",
  components: {
    Land
  }
};
</script>


<style scoped>
.home {
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
}

/* .land {
  position: relative;
  width: 1000px;
  background-color: #f5f5f5;
  
} */


  @media(max-width: 500px){

      .home{
        width: 100%;
        padding: 5px;
        height: 100%;
      }

    
   }


</style>
