import { useState } from 'react'
import { Hero } from './components/Hero.tsx'
import hero1 from './assets/hero1.jpeg'
import hero2 from './assets/hero2.jpg'
import hero3 from './assets/hero3.jpg'
import hero4 from './assets/hero4.jpg'
import hero5 from './assets/hero5.jpg'


function App() {
  const [count, setCount] = useState(0)
  const images = [hero1, hero2, hero3, hero4, hero5]

  return (
    <>
      <Hero imageUrls={images}></Hero>
      <div>
        <h1 className="text-3xl font-bold underline hover:text-orange-500">
          Привет мир!
        </h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
