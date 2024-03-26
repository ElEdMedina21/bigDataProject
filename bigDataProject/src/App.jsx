import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainBanner from './MainBanner'
import './App.css'
import LoginSection from './LoginSection'

function App() {

  const [isAnimating, setAnimating] = useState(false);

  function startAnimation() {
    setAnimating(true);
  }

  return (
    <>
      <main>
        <section className='main-page'/>
        <MainBanner startAnimation={startAnimation} isAnimating={isAnimating}/>
        <LoginSection isAnimating={isAnimating}/>
      </main>
    </>
  )
}

export default App
