<template>
  <div class="shadow-lg py-12 my-12 md:p-12 md:m-12">
      <router-link :to="{ name:'Detail', params:{id:post.id}}">
        <h1 class="md:text-3xl text-xl">
        {{post.title}}
        </h1>
      </router-link>
      <div class="grid md:grid-cols-4 grid-cols-1 p-8">
        <span class="text-red-600">Dinesh Bajgain</span>
        <span class="text-red-600">Wednesday, April 23, 2021</span>
        <span class="text-red-600">Dinesh Bajgain</span>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="md:col-span-2 col-span-12 flex justify-center">
          <img src="../assets/img/avatar.png" class="w-24 md:w-full text-center">
        </div>
       <p class="md:col-span-10 col-span-12 md:text-left text-center">
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
      <div class="md:m-0 mt-12">
        <span class="text-red">
             Tags : 
        </span>
        <span v-for="tag in post.tags" class="bg-blue-400 p-2 m-2 rounded-md text-white"  :key="tag">#{{tag}} </span>
      </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props:['post'],
    setup(props){
        const snippet = computed (()=>{
            return props.post.body.substring(0,500)+'...'
        })

        return { snippet }
    }
}
</script>

<style>

</style>