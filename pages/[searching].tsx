import React from 'react'
import { GetServerSideProps,InferGetServerSidePropsType } from 'next'
import { apiFormat } from './interfaces/interfaces'
export const getServerSideProps:GetServerSideProps<{apiType:apiFormat}>=async (context)=>{
  const {city}=context.query
  console.log(city)
  city?.toString
  const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
  const apiType=await response.json()
  return {
    props:{
      apiType
    }
  }
}
  
const Searching = ({apiType}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if(apiType.cod===404){
    return (
      <div className='flex justify-center items-center'>
        {
          apiType.cod
        }
      </div>
    )
  }
  else{
  return (
    <div className='flex justify-center items-center'>
      {
        apiType.main.temp
      }
    </div>
  )
    }
}

export default Searching
