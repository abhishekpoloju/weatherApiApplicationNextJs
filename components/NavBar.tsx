import Link from 'next/link'
import React, { ChangeEvent, SetStateAction, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const NavBar = () => {
  const router=useRouter()
  const [input,setInput]=useState<string>("")
  const inputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }
  const searchBarFormSubmission=(e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const value:string=(e.currentTarget.elements.item(0)?.getAttribute("value")!)
    if(value){      
      router.push({
        pathname:'/searching',
        query:{city:value}
      })
    }
  }
  return (
    <nav className='flex h-20 bg-slate-400 w-full px-5 items-center justify-between
    '>
      <Link href={`/`}><span className='text-white text-3xl font-extrabold'>WeatherApplication</span></Link>
      <form className='relative' onSubmit={searchBarFormSubmission}>
      <input value={input} id='searchBar' onChange={inputChange} className='rounded-md border border-black'/>
      <button type='submit'><Image src={"icons8-search.svg"} alt='' width={20} height={20} className='absolute top-[1.5px] right-2'/></button>
      </form>
    </nav>
  )
}





