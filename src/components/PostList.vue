<template>
  <div class="post-list">
       <div v-for="post in posts" :key='post.id'>
           <SinglePost class="bg-white" :post='post' />
       </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from "./SinglePost.vue"
export default {
  components:{SinglePost},
    props:['posts'],
    setup(){
        onMounted(()=>console.log('component mounted'))
        onUnmounted(()=>console.log('component Unmounted'))
        onUpdated(()=>console.log('component Updated'))
        return {}
    }
}
</script>

<style>

</style>