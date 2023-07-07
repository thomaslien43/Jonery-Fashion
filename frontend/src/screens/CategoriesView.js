import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import Shop from "../components/homeComponents/Shop";

const Categories = ()=>{
    window.scrollTo(0, 0);
    const [category,setCategory] = useState('all')
    const categories = ['All','Flat Shoe', 'High Heels']
  
    const onClickCategory = useCallback((category)=>()=>{
        console.log(category)
      setCategory((prev)=> prev === category ? 'all' : category)
    },[setCategory])

    return(
        <>
        <Header />
        <div style={{ display:'flex', justifyContent:'center', gap:8}}>
        {categories.map((currentCategory)=> <button style={{
            opacity: currentCategory === category ? 1 : 0.4,
            minWidth:120,
            border:'0.3px solid black'
        }} onClick={onClickCategory(currentCategory)}>{currentCategory}</button>)}
        </div>

        <Shop category={category} />
        </>
    )
}

export default Categories;