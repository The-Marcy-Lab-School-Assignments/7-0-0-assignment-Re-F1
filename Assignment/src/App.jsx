import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [language, setLanguage] = useState("English")
  const [greeting, setGreeting] = useState("Good morning")
  const [fontSize, setFontSize] = useState(44)

  const fontSizes = (size) => {
    setFontSize(prevSize => prevSize + size)
  }

  const updateLanguage = (lang) => {
    setLanguage(lang)

  const languageObject = {
    English : "Good morning",
    Spanish : "buenos dias",
    Estonian : "tere hommikust",
    Arabic : "صباح الخير",
    Dzongka : "དྲོ༌པ༌བདེ༌ལེགས༌",
  }

  setGreeting(languageObject[lang])
}

  return (
    <>
    
  
    <div>
    <button onClick = {() => fontSizes(-10)}>-</button>
    <button onClick = {() => fontSizes(10)}>+</button>

    <h1 style={{fontSize:`${fontSize}px`}}>{greeting}</h1>

    <div>
    <button onClick={() => updateLanguage("English")}> English</button>
    <button onClick={() => updateLanguage("Spanish")}>Spanish</button>
    <button onClick={() => updateLanguage("Estonian")}>Estonian</button>
    <button onClick={() => updateLanguage("Arabic")}>Arabic</button>
    <button onClick={() => updateLanguage("Dzongka")}>Dzongkha</button>
    
    </div>
    
    
    
    </div>
    </>
  )
}

export default App
