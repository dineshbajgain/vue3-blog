<template>
  <div class="home">
      <h1>Home</h1>
      <h1>Computed</h1>
      <input type="text" v-model="search">
      <p>Search Term - {{search}}</p>
      <div v-for='name in matchingNames' :key='name'>
        {{name}}
      </div>
      <button @click='handelClick'>Stop Watch</button>
   </div>
</template>

<script>
import { computed, ref, watch, watchEffect} from 'vue'
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
  // watch function
  const stopWatch = watch(search, ()=>{
    console.log("watch function")
  })
  // watchEffect function
  const stopEffect =watchEffect(()=>{
    console.log("watchEffect function",search.value)
  })
  // invoke function
  const handelClick = ()=>{
    stopWatch()
    stopEffect()
  }
   //returning value
   return{names,search,matchingNames,handelClick}
  },
}
</script>
