<template>
    
    <div v-show="notFound == false">
        <div class="heading">

            <h1>{{ repo?.name }}</h1>
            <div class="back" @click="this.$router.push('/')">Back</div>
        </div>

        <div>
            <div class="carousel-container">
                <div>
                        <div>ID: {{ repo?.id }}</div>
                        <div>Node ID: {{ repo?.node_id }}</div>
                        <div>Name: {{ repo?.name }}</div>
                        <div>Fullname {{ repo?.full_name }}</div>
                        <div>Private? {{ repo?.private }}</div>
                        <div>Description {{ repo?.description }}</div>
                        <div>Fork? {{ repo?.fork }}</div>
                        <div>Created At {{ repo?.created_at }}</div>
                        <div>Updated At {{ repo?.updated_at }}</div>
                        <div>Pushed At {{ repo?.pushed_at }}</div>
                        <div>Size {{ repo?.size }}</div>
                </div>
               
            </div>
        </div>
    

    </div>
    <div v-show="notFound == true">
        <NotFoundVue repo="true"></NotFoundVue>
    </div>
</template>

<script>
import axios from 'axios';
import NotFoundVue from '@/components/NotFound.vue';

export default {
    data(){
        return {
            repo: {

            },
            notFound: null
        }
    },
    mounted(){
        const name = this.$route.params.name
        axios.get(`https://api.github.com/repos/${process.env.VUE_APP_GITHUB_USERNAME}/${name}`, {
            headers: {
                Authorization: `token ${process.env.VUE_APP_GITHUB_PAT}`
            }
        }).then(res =>{

            this.repo = res.data
            this.notFound = false
        }).catch(() => {
            console.log("shshshshshs")
            this.notFound = true
            console.log("shshshshshs", this.notFound)
        })
    },
    components: {
        NotFoundVue
    }
   
}
</script>

<style scoped>
.back{
    color: #fff;
    background: rebeccapurple;
    width: 100px;
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.heading{
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 1rem
}

.carousel-container{
    width: 50%;
    height: 30vh;
    margin: 2rem auto;
    font-family: "Roboto", sans-serif;

}

.carousel-container > div > div{
    margin-bottom: 1.5rem;
    font-weight: 500;
    color: rebeccapurple
}

</style>