<template>
  <article>
    <section class="mob">
      <h2>Landen met API - Tweede oefen</h2>
      <button class="btn btn-success m-1" @click="fechLanden()">Ophalen</button>
      <button class="btn btn-danger m-1" @click="wisLand()">Wisen</button>
      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
        obcaecati, necessitatibus numquam porro tenetur dolores. Enim eligendi
        laboriosam non repellat.
      </p>

      <section>
        <h3 v-if="!loading">
          Laden...
          <span
            class="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </h3>
      </section>
      <section v-if="error">
        <h3>Error!</h3>
        <p>{{ errorList }}</p>
      </section>
      <section>
        <ul class="list-group" v-if="landen && landen.length">
          <li
            class="list-group-item"
            v-for="land in landen"
            :key="land.name"
            @click="getLand(land.name)"
          >
            <span class="float-left">
              <img :src="land.flag" alt="Landen vlag" class="imgFlag" />
            </span>
            <h4>{{ land.name }}</h4>
            <p>
              {{ land.capital }}
              : {{ land.population }} (bevolking/miljoen).

              {{ land.languages.name }}
            </p>
          </li>
        </ul>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: "Land",

  methods: {
    fechLanden() {
      this.$store.dispatch("fechLanden");
    },
    wisLand() {
      this.$store.dispatch("wisLand");
    },

    getLand(name) {
      //4
      //console.log(this.$store.getters.getLand(name));
      this.$router.push({
        name: "landen-detail",
        params: {
          name: name
        }
      });
    }
  },

  computed: {
    landen() {
      return this.$store.state.landen;
    },
    loading() {
      return this.$store.state.laadStatus == "notloading";
    },
    error() {
      return this.$store.state.errors.length > 0;
    },
    errorList() {
      return this.$store.state.errors;
    }
  }
};
</script>

<style scoped>
article {
  background-color: #f4f4f4;
  height: auto;
}

.sec {
  padding-top: 50px;
  width: 750px;
  height: auto;
  scroll-behavior: smooth;
}

.imgFlag {
  max-width: 80px;
  border: 1px solid #aaa;
  border-radius: 8px;
  margin-right: 4px;
}

.list-group-item {
  cursor: pointer;
}

@media (max-width: 500px) {
  .mob {
    width: 100%;
    background-color: #f4f4f4;
    height: 100vh;
    scroll-behavior: smooth;
    text-align: center;
  }
}
</style>
