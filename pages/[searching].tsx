import React from 'react'
import { GetServerSideProps,InferGetServerSidePropsType } from 'next'
import { apiFormat } from './interfaces/interfaces'
import { ApiDataShow } from '@/components/ApiDataShow'
export const getServerSideProps:GetServerSideProps<{apiType:apiFormat}>=async (context)=>{
  const {city}=context.query
  city?.toString
  
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=imperial`)
  const apiType=await response.json()
  return {
    props:{
      apiType
    }
  }  
}
const Searching = ({apiType}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
   if(apiType===null){
    return (
      <div className='flex justify-center items-center'>
        The particular location is not available in Api
      </div>
    )
  }
  else if(apiType.cod===200){
  return (
    <div className=''>
        <ApiDataShow {...apiType}/>
    </div>
  )
    }
    else{
      return (
        <div className='flex justify-center items-center'>
          The particular location is not available in Api
        </div>
      )
    }
}

export default Searching
