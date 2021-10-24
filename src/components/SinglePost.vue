<template>
  <div class="shadow-lg p-12 m-12">
      <router-link :to="{ name:'Detail', params:{id:post.id}}">
        <h1 class="text-3xl">
        {{post.title}}
        </h1>
      </router-link>
      <div class="grid grid-cols-4 p-8">
        <span class="text-red-600 col-span-2">Dinesh Bajgain</span>
        <span class="text-red-600">Wednesday, April 23, 2021</span>
        <span class="text-red-600">Dinesh Bajgain</span>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2">
          <img src="../assets/img/avatar.png">
        </div>
       <p class="col-span-10 text-left">
        {{snippet}}
      </p>
      <div class="col-span-12 text-right">
        <button class="bg-red-500 w-24 text-white rounded-md p-1">
      <router-link :to="{ name:'Detail', params:{id:post.id}}">
          Read More
          </router-link>
          </button> 
      </div>
      </div>
      
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