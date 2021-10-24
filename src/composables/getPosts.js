import axios from 'axios'
import { ref} from 'vue'
const getPosts = () =>{
    const posts = ref([])
    const error = ref(null)
    const popularPosts = ref(null)
    const load = async ()=>{
      try {
        // let data = await fetch('http://localhost:3000/posts')
        let data = await axios.get('http://localhost:3000/posts')
        if(!data.status===200){
          throw Error('no data available')
        }
        posts.value = await data.data 
        popularPosts.value = await posts.value.filter(res=>res.is_popular===true)
      } catch (err) {
        error.value = err.message         
      }

    }
  
    return {posts,popularPosts, error, load}
}

export default getPosts