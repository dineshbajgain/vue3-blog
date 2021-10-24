import axios from 'axios'
import {ref} from 'vue'
const getPost = (id)=>{
    const post = ref(null)
    const error = ref(null)
    const load = async ()=>{
        try {
          // let data = await fetch('http://localhost:3000/posts')
          let data = await axios.get('http://localhost:3000/posts/'+id)
          if(!data.status===200){
            throw Error('no data available')
          }
          post.value = await data.data 
        } catch (err) {
          error.value = err.message         
        }
      }
    return {post, error, load}
}
export default getPost