<template>
  <div class="bg-cream">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
       <PostList :posts="posts" :popular-posts="popularPosts" />
      </div>
      <div v-else>
        Loading ...
      </div>
   </div>
</template>
<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
export default {
  name: 'Home',
  components:{PostList},
  setup(){
    const {posts, popularPosts, error, load} = getPosts()
    load()
    return {posts,error,popularPosts}
  },
}
</script>
