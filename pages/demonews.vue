<template>
<div>
    <button @click="getNews()">getNews</button>
    <arthro v-for="(a,index) in news" :key="index" :a="a" />
</div>  
</template>

<script>

export default {
    data(){
        return{
            news:[]
        }
    },
    methods:{
        async getNews(){
            this.$nuxt.$loading.start()
            let res = await this.$axios.$get(`/api/getRss`);
            console.log(res);
            this.news = res;
            this.$nuxt.$loading.finish()
        }
    }
}
</script>
