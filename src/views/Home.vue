<template>
  <div class="home">
   home
   <p>
     My name is {{name}} and my age is {{age}}.
    </p>
     <button @click="handelClick">click me</button>
   
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'Home',
  setup(){
    const name = ref('mario')
    const age = ref(12)
    const handelClick = ()=> {
      name.value='dinesh'
      age.value=23
    }
    return{name,age,handelClick}
  },
}
</script>
