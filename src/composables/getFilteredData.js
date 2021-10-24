const getFilteredData = ()=>{
    const searchPostData= (arrayData=[],key='',search)=>{
      const data = arrayData.filter(res=>res[key].includes(search))
      return data
    }
    return {searchPostData}
  }
  export default getFilteredData