<template>
    <footer  class="bg-primary">
        <p>
            Alle rechten voorbehouden door <span> HooNL &copy;{{ new Date().getFullYear() }} </span>
        </p>
    </footer>
</template>

<script>
export default {
    name: "Foot"

}
</script>

<style scoped>
    footer{
        padding: 10px 10px 0 10px;
        color: #000;
        font-size: 20px;
        font-weight: 700;
    }

    span:hover{
        color: aliceblue;
        cursor: pointer;
    }
</style>