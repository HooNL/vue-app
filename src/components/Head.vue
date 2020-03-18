<template>
  <header>
    <nav id="nav" class="bg-primary">
      <router-link to="/" class="a">Home</router-link> 
      <router-link to="/about" class="a">About</router-link>
      <router-link to="/werk" class="a">Werk</router-link>

    </nav>
  </header>
</template>

<script>
export default {
    name: "Head"
}
</script>

<style scoped>

  @media(max-width: 500px){
    header{
      padding: 0;
    }
    .a{
      font-size: 20px;
    }
  }

</style>