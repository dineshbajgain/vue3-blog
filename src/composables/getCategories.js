import {ref} from 'vue'

const getCategories= ()=>{
    const categories = ref([
        {id:1,count:6,name:'Fashion'},
        {id:2,count:5,name:'Technology'},
        {id:3,count:11,name:'Traval'},
        {id:4,count:13,name:'Photography'},
        ])
    return {categories}
}
export default getCategories