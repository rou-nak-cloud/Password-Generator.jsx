import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordGenerator from './components/PasswordGenerator'
import { LC, NS, SL, UC } from './components/Chars'

function App() {
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [passLength, setPassLength] = useState(8)
  const [randomPass, setRandomPass] = useState('')

    const createPassword = ()=>{
      let charSet=''
      let finalPassword=''
      if(uppercase || lowercase || numbers || symbols){
        if(uppercase) charSet+=UC;
        if(lowercase) charSet+=LC
        if(numbers) charSet+=NS
        if(symbols) charSet+=SL
        // console.log(charSet)

        for(let i=0;i<passLength;i++){
          finalPassword+=charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
        setRandomPass(finalPassword)
      }
      else{
        alert("Please select at least one checkbox to generate..")
      }
    }

    const copyPass = ()=>{
      navigator.clipboard.writeText(randomPass)
    }

  return (
    <>
     <PasswordGenerator
      uppercase={uppercase} 
      setUppercase={setUppercase} 
      lowercase={lowercase} 
      setLowercase={setLowercase} 
      numbers={numbers} 
      setNumbers={setNumbers} 
      symbols={symbols} 
      setSymbols={setSymbols}  
      createPassword={createPassword}
      passLength={passLength}
      setPassLength={setPassLength}
      randomPass={randomPass}
      setRandomPass={setRandomPass}
      copyPass={copyPass}
       />
    </>
  )
}

export default App
