<template>
  <div class="home">
      <h1>Home</h1>
      <h1>Refs</h1>
      <p>{{first.name}} - {{first.age}}</p>
      <button @click="updateFirst">Update First</button>
      <h1>Reactive</h1>
      <p>{{second.name}} - {{second.age}}</p>
      <button @click="updateSecond">Update Second</button>

   </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'Home',
  setup(){
    const first = ref({name:'Dinesh',age:23})
    const second = reactive({name:'Laxman',age:28})
    const updateFirst = ()=>{
      first.value.name='Dinesh Bajgain'
      first.value.age = 25
    }
    const updateSecond = ()=>{
      second.name = 'Laxman Bajgain'
      second.age = 40
    }
    return{first,second,updateFirst,updateSecond}
  },
}
</script>
