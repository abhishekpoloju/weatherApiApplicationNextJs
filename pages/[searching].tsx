import React from 'react'
import { GetServerSideProps,InferGetServerSidePropsType } from 'next'
import { ApiResultCard } from '@/components/ApiResultCard'
import { ApiError } from 'next/dist/server/api-utils'
import { apiFormat } from './interfaces/interfaces'
export const getServerSideProps:GetServerSideProps<{apiType:apiFormat}>=async (context)=>{
  const {city}=context.query
  console.log(city)
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
  console.log(apiType)
  if(apiType.cod===404){
    return (
      <div className='flex justify-center items-center'>
        {
          
        }
      </div>
    )
  }
  else{
  return (
    <div className='flex h-screen justify-center items-center'>
        <ApiResultCard {...apiType}/>
    </div>
  )
    }
}

export default Searching
