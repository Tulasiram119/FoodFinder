import React from 'react'
import { useState, useEffect } from 'react'
export default function Contact() {
  const [count,setCount] = useState(0);
  useEffect(()=>{
    const time = setInterval(()=>{
      setCount(count+1)
      console.log(count+1);
    },2000)
    console.log("UseEffect");
    return () => {
      console.log("useEffect as unmount");
      clearInterval(time);
    };
  })
  console.log("render");
  return (
    <div>
      <h1>If you any complaints please don't contact me {count}</h1>
    </div>
  )
}
