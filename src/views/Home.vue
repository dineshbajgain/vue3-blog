<template>
  <div class="home">
      <h1>Home</h1>
      <PostList v-if='showPosts' :posts="posts" />
      <button @click='showPosts = !showPosts'>toggle button</button>
      <button @click="posts.pop()"> Delete A Post</button>
   </div>
</template>
<script>
import { ref} from 'vue'
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components:{PostList},
  setup(){
    const posts = ref([
      {title:'Welcome to the blog',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ipsam cupiditate similique iusto nobis, tempore porro neque adipisci. Illum, iusto sequi. Facere labore tempora ad iusto reprehenderit accusamus, neque est!',id:1},
      {title:'top 5 css tricks',body:'This is the second body Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ipsam cupiditate similique iusto nobis, tempore porro neque adipisci. Illum, iusto sequi. Facere labore tempora ad iusto reprehenderit accusamus, neque est! ',id:2}
      ])
    const showPosts = ref(true)
      return {posts,showPosts}
  },
}
</script>
