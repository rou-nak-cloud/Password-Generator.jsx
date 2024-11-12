import React from 'react'

const PasswordGenerator = ( {uppercase, setUppercase, lowercase, setLowercase,  numbers,  setNumbers,  symbols,  setSymbols,passLength, setPassLength, createPassword, randomPass, setRandomPass, copyPass} ) => {
  return (
    <>
    <div className='pass-box'>
        <h2>PassWord Generator</h2>

        <div className='passInput'>
            <input type="text" readOnly value={randomPass}/> <button onClick={copyPass}>Copy</button>
        </div>
        <div className='passLength'>
            <label>PassWord Length</label>
            <input type="number" max={26} min={8} value={passLength} onChange={(e)=>setPassLength(e.target.value)} />
        </div>
        <div className='flex'>
            <label>Include Uppercase</label>
            <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>
        <div className='flex'>
            <label>Include Lowercase</label>
            <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>
        <div className='flex'>
            <label>Include Numbers</label>
            <input type="checkbox" checked={numbers} onChange={()=>setNumbers(!numbers)}/>
        </div>
        <div className='flex'>
            <label>Include Symbols</label>
            <input type="checkbox" checked-={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>
        <button className='btn' onClick={createPassword}>Generate</button>
    </div>
    </>
  )
}

export default PasswordGenerator
