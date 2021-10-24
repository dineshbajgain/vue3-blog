<template>
<div class="p-12 m-12">
<div v-if="error">{{error}}</div>
  <div v-if="post">
        <span class="text-3xl">
            {{post.title}}
        </span>
         <div class="grid grid-cols-3 p-8">
        <span class="text-red-600">Dinesh Bajgain</span>
        <span class="text-red-600">Wednesday, April 23, 2021</span>
        <span class="text-red-600">Dinesh Bajgain</span>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2">
          <img src="../assets/img/avatar.png">
        </div>
       <p class="col-span-10 text-left">
        {{post.body}}
      </p>
      </div>
      <div class="text-right">
        <span class="text-red">
             Tags : 
        </span>
        <span v-for="tag in post.tags" class="bg-blue-400 p-2 m-2 rounded-md text-white"  :key="tag">#{{tag}} </span>
      </div>
  </div>
</div>
</template>

<script>
import getPost from "../composables/getPost"
export default {
    props:['id'],
    setup(props){
        const {post, error, load} = getPost(props.id)
        load()
        return{post, error}
    }
}
</script>

<style>

</style>