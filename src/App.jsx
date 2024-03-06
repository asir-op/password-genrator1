import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

function App() {

    const [length, setLength] = useState(8)
    const [numAllowed, setnumAllowed] = useState(false)
    const [charAllowed, setcharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const passwordGenerator = useCallback(() => {
        var pass = '';
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz";
        if (numAllowed) {
            str += "0123456789";
        }
        if (charAllowed) {
            str += "!@#$%^&*()_?{}";
        }
        
        for(let i = 1; i <= length; i++){
            var char = Math.floor(Math.random()*str.length);
            pass += str.charAt(char)
            
        }
        setPassword(pass)
    },[length, numAllowed, charAllowed, setPassword])
    
    useEffect(() => {passwordGenerator()
    },[length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full h-screen bg-gray-700 mt-0 relative'>

    <div className='w-6/12 h-15 bg-gray-600 rounded-lg absolute overflow-hidden left-1/4 top-10' >
        <h1 className='mt-5 text-center text-orange-600 text-3xl font-bold'>Random Password Generator</h1>
        <div className=' flex gap-x-3 '>
            {/* <h1 className='text-lg text-center pt-4 text-black'>Password Generator</h1> */}
            <input type="text"
            value={password}
            className='outline-none bg-white w-full py-1 mx-4 my-4 px-4 border border-black rounded-lg'
            placeholder='password'
            readOnly

            
            />
            <button
            className='mx-4 bg-blue-700 h-auto my-4 rounded-lg w-20 shrink-0'
            >copy</button>
        </div>

        <div className='text-sm flex gap-x-2 mx-4 mb-4'>
            <div className='flex items-center gap-x-1'>
                <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
                />
                <label >Length: {length}</label>

            </div>
            <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox" 
                defaultChecked = {numAllowed}
                onChange={() => {
                    setnumAllowed((prev) => !prev);
                }}
                
                />
                <label > Number</label>
                <input type="checkbox" 
                defaultChecked = {charAllowed}
                onChange={() => {setcharAllowed((prev) => !prev);}}
                
                />
                <label > Character</label>
            </div>

        </div>
        </div>
    </div>
    
    </>
  )
}

export default App