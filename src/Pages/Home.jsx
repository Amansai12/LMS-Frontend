import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Footer from '../components/Footer'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Loader from '../components/Loader'
import Services from './Services'

function Home() {
const {data:r,isLoading,isError,isSuccess} = useQuery({
  queryKey:['books'],
  queryFn: async ()=>{
    const p = await axios.get('https://lms-backend-zjpz.onrender.com/books')
    return p.data.data;
  }
})
  if(isLoading){
    return <Loader />
  }
  if(isError){
    return <h1>Something went wrong</h1>
  }
  if(isSuccess){
    const d = r.slice(0,6)
    return (
      <div>
        <Navbar />
        <Hero />
        <hr />
        <Category content={d} />
        <Footer />
      </div>
    )
  }
}

export default Home
