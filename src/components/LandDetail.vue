<template>
  <section v-if="land">
      <h2>Detail voor {{ land.name }} - direct vanuit store.</h2>


    <table class="table table-striped">
        <tr>
            <td>Vlag</td>
            <td><img :src="land.flag" alt="Land vlag" class="imgFlag"></td>
        </tr>
    </table>


  </section>
</template>

<script>
export default {
    name: 'LandDetail',

    created(){
        this.name = this.$route.params.name;
    },

    computed: {
        land(){
            return this.$store.getters.getLand(this.name);
        }
    },
}
</script>

<style>

</style>