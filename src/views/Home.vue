<template>
  <div class="home">
   <h1>Home</h1>
   <h1>Refs</h1>
   <p>{{first.name}} - {{first.age}}</p>
   <button @click="updateFirst">Update First</button>
   </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'Home',
  setup(){
    const first = ref({name:'mario',age:30})
    const updateFirst = ()=>{
      first.value.age = 40
    }
    return{first,updateFirst}
  },
}
</script>
