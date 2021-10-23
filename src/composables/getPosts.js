import axios from 'axios'
import { ref} from 'vue'
const getPosts = () =>{
    const posts = ref([])
    const error = ref(null)
    const load = async ()=>{
      try {
        // let data = await fetch('http://localhost:3000/posts')
        let data = await axios.get('http://localhost:3000/posts')
        if(!data.status===200){
          throw Error('no data available')
        }
        posts.value = await data.data 
      } catch (err) {
        error.value = err.message         
      }
    }

    return {posts, error, load}
}

export default getPosts