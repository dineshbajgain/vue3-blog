const getFilteredData = ()=>{
    const searchPostData= (arrayData=[],key='',search,exact)=>{
      const data = arrayData.filter(res=>{
        if(exact) return res[key]===search
        else return res[key].includes(search)
      })
      return data
    }
    return {searchPostData}
  }
  export default getFilteredData