import { useState } from 'react'

function App() {
  const [color, setColor]= useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-150' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-4 px-2'> 
          < div className='shadow-lg bg-white gap-3 p-1 rounded-xl m-2'>
            <button onClick={()=>setColor("red")} className=' bg-red-600 rounded-3xl text-lg px-4 py-1 font-semibold m-3'>Red</button>
            <button onClick={()=> setColor("Yellow")} className=' bg-yellow-400 rounded-3xl text-lg px-4 py-1 font-semibold m-3'>Yellow</button>
            <button onClick={()=>{setColor("Blue")}} className=' bg-blue-400 rounded-3xl text-lg px-4 py-1 font-semibold m-3'>Blue</button>
            <button onClick={()=> setColor("Pink")} className=' bg-pink-400 rounded-3xl text-lg px-4 py-1 font-semibold m-3'>Pink</button>
            <button onClick={()=> setColor("Orange")} className=' bg-orange-600 rounded-3xl text-lg px-4 py-1 font-semibold m-3'>Orange</button>   
            <button onClick={()=> setColor("Green")} className=' bg-green-600 rounded-3xl text-lg px-4 py-1 font-semibold m-3'>Green</button>            
            <button onClick={()=> setColor("Gray")} className='bg-gray-600 rounded-3xl text-lg px-4 py-1 font-semibold m-3'>Gray</button>            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
