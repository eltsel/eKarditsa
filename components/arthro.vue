<template>
    <div>
        <img :src="a.thumbnail" alt="">
        <h2>{{a.title}}</h2>
        <div v-html="a.html">

        </div>
    </div>
</template>

<script>
export default {
    props: ["a"]
}
</script>

<style>
    
</style>