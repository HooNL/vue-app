<template>
  <article>
      <!-- <h1>This is a Work page</h1> -->
      <section>
          <Kaar class="kaar"/>
      </section>

      
  </article>
</template>

<script>
import Kaar from '@/components/Kaar'

export default {
    name: "Work",

    components: {
        Kaar
    }
}
</script>

<style scoped>
    @media(max-width: 500px){

        article{
            height: 100%;
            margin: 0;
        }

        .kaar{
            margin-bottom: 60px;
        }
    }
</style>