<template>
  <div class="home">
      <h1>Home</h1>
      <h1>Computed</h1>
      <input type="text" v-model="search">
      <p>Search Term - {{search}}</p>
      <div v-for='name in matchingNames' :key='name'>
        {{name}}
      </div>
   </div>
</template>

<script>
import { computed, ref} from 'vue'
export default {
  name: 'Home',
  setup(){
  //  defining empty variable
   const search = ref('')
   // defining array
   const names = ref(['dinesh','srijana','jagat','bhim','laxman'])
   // using computed
   const matchingNames = computed(()=>{
      return names.value.filter(name=>name.includes(search.value))
   })
   //returning value
   return{names,search,matchingNames}
  },
}
</script>
