<template>
  <div class="shadow-lg pa-12 ma-12">
      <router-link :to="{ name:'Detail', params:{id:post.id}}">
        <h1 class="text-3xl">
        {{post.title}}
        </h1>
      </router-link>
      <div>
        <span>Dinesh Bajgain</span>
        <span>Wednesday, April 23, 2021</span>
        <span>Dinesh Bajgain</span>
      </div>
      <p>
        {{snippet}}
      </p>
      <span v-for="tag in post.tags" :key="tag">#{{tag}} </span>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props:['post'],
    setup(props){
        const snippet = computed (()=>{
            return props.post.body
        })

        return { snippet }
    }
}
</script>

<style>

</style>