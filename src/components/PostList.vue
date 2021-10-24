<template>
  <div class="grid grid-cols-12 gap-2">
      <div class="md:col-span-8">
          <div v-for="post in postData" :key='post.id'>
             <SinglePost class="bg-white" :post='post' />
          </div>
      </div>
      <div class="md:col-span-4 p-12">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 bg-white p-4">
            <input v-model="search" type="text" class="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <button class="bg-red-500 text-white w-24 h-10">Search</button>
          </div>
          <div class="col-span-12 bg-white p-4">
            Categories
            <ul>
              <template v-for="category in categories" :key="category.id">
                 <li class="flex justify-between p-4">
                  <span class="text-left">{{category.name}}</span>
                  ({{category.count}})
                </li>
                <hr>
              </template>
            </ul>
          </div>
          <div class="col-span-12 bg-white p-4">
            <span class="font-bold">
            Popular Posts
            </span>
            <div v-for="post in popularPosts" :key='post.id'>
             <PopularSinglePostVue class="bg-white" :post='post' />
          </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue"
import PopularSinglePostVue from "./post/PopularSinglePost.vue"
import getCategories from '../composables/getCategories'
import getFilteredData from '../composables/getFilteredData'
import { ref,computed } from '@vue/reactivity'

export default {
  components:{SinglePost,PopularSinglePostVue},
    props:['posts','popular-posts'],
    setup(props){
         const search = ref('')
         const {categories} = getCategories()
         const postData = computed(()=>{
          const {searchPostData} =  getFilteredData()
          return searchPostData(props.posts,'title',search.value)
         })
        return {search,categories,postData}
    }
}
</script>

<style>

</style>