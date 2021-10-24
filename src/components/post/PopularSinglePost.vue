<template>
  <div class=" py-8 w-full">      
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2">
          <img src="../../assets/img/avatar.png">
        </div>
       <p class="col-span-10 text-left">
          <router-link :to="{ name:'Detail', params:{id:post.id}}">
        <h1 class="text-xl hover:text-blue-700">
        {{post.title}}
        </h1>
      </router-link>
        {{snippet}}
      </p>
      </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props:['post'],
    setup(props){
        const snippet = computed (()=>{
            return props.post.body.substring(0,110)+'...'
        })

        return { snippet }
    }
}
</script>

<style>

</style>