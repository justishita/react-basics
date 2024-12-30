import { useState, useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] =useState(false)
  const [CharAllowed, setCharAllowed] =useState(false)
  const [Password, setPassword] =useState("")

  const passwordRef = useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(NumberAllowed) str+="0123456789"
    if (CharAllowed) str+="!@#$%^&*?"

    for(let i=1; i< length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length,NumberAllowed,CharAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, NumberAllowed, CharAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='font-semibold text-center text-4xl text-white mt-5 p-3'>Password generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 p-5'>
            <input type="text" 
            value ={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className='outine-none bg-blue-500 text-white p-2 shrink-0 hover:bg-blue-900'>copy</button>
          </div>
          <div className='flex text-sm gap-x-2 p-4'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={NumberAllowed}
                id="numberInput"
                onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={CharAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev )
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
