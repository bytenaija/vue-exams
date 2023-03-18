<template>
  <div class="container">
    <h1>404</h1>
    <p class="not-found" v-show="!repo">That page cannot be found</p>
    <p class="not-found" v-show="repo">The repo cannot be found</p>

    <router-link to="/">Home Page</router-link>
  </div>
</template>

<script>
import {RouterLink} from 'vue-router'
export default {
name: 'NotFound',
props: ['repo'],
components:{
    RouterLink
}
}
</script>

<style scoped>

.container{
    width: 50%;
    height: 40vh;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
}

.not-found{
    color: rebeccapurple
}

</style>