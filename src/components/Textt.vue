<template>
  <article>
    <section>
      <h1>This is text compo</h1>
        <button class="btn btn-info" @click="fechCity()">City</button>
        <button class="btn btn-info" @click="wisCity()">Wis City</button>

          <section>
          <h3 v-if="!loading">
              Laden...
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> 
          </h3>
      </section>
      <section v-if="error">
          <h3>Error!</h3>
          <p>{{ errorList}}</p>
      </section>
        <section>
          <div class="list-group" v-if="landen && landen.length">
              <h2 class="list-group-item"
                    v-for="land in landen" :key="land.name" @click="getLand(land.name)">
                    <span class="float-left">
                      <img :src="land.flag" alt="Landen vlag" class="img">
                    </span>
                    <h4>{{ land.name }}</h4>
                    <p>
                      {{ land.capital }}
                    : {{ land.population }}
                    </p>

              </h2>
          </div>
        </section>
  </section>
  </article>
</template>

<script>
export default {
    name: "Textt",

    methods: {
      fechCity(){
            this.$store.dispatch('fechCity');
        },
        wisCity(){
            this.$store.dispatch('wisCity');
        },
    },

       computed: {
        landen(){
            return this.$store.state.landen;
        },
        loading(){
            return this.$store.state.laadStatus == 'notloading'
        },
        error(){
            return this.$store.state.errors.length > 0;
        },
        errorList(){
            return this.$store.state.errors;
        }
    }

}
</script>

<style scoped>
  section{
    background-color: #00aabb;
  }

  .img{
    width: 300px;
    height: 300px;
  }
</style>