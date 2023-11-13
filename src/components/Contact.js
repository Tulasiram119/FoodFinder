import React from 'react'
import { useState, useEffect } from 'react'
export default function Contact() {  
  return (
    <div>
      <h1 className='font-bold p-4 m-4 text-3xl'>Contact us page</h1>
      <form>
        <input type="text" className='border border-black p-2 m-2' placeholder='name'/>
        <input type="text" className='border border-black p-2 m-2' placeholder='message' />
        <button className='m-2 p-2 border border-black bg-black rounded-lg text-white'>Submit</button>
      </form>
    </div>
  )
}
