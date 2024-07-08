import React, { useState,useEffect } from 'react'
import Card from './Card'

function Category(props) {
    const d = props.content;
    const [pages,setPages] = useState(1)
    useEffect(() => {
      setPages(1)
    
      
    }, [d])
    const [contentperpage,setContentperpage] = useState(6)
    let lastindex = pages * contentperpage 
    let firstindex = lastindex - contentperpage;
    let totalpages = Math.ceil(d?.length/contentperpage);
    const data = d?.slice(firstindex,lastindex)
  return (
    <>
        <h1 className='text-center text-black text-4xl font-bold mt-12'><i className="ri-book-open-fill text-4xl"></i> Books</h1>
        <div className="flex justify-center content-center flex-wrap gap-7 mt-7 mb-10 px-7">
            {data?.map((ele,index)=>(
                <Card info={ele} key={index+1} />
            ))}
            
        </div>
        <div className='w-full flex justify-center mb-7'>
            <div className="join">
            <button disabled={pages <= 1} className="join-item btn text-lg bg-rose-300" onClick={()=>setPages(pages-1)}>«</button>
            <button className="join-item btn bg-rose-300">{`Page ${pages} of ${totalpages}`}</button>
            <button disabled={pages >= totalpages} className="join-item btn text-lg bg-rose-300" onClick={()=>setPages(pages+1)}>»</button>
            </div>
        </div>
    </>
  )
}

export default Category
