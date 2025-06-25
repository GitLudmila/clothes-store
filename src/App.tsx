// import { useState } from 'react'
import { Hero } from './components/Hero.tsx'
import { Nav } from './components/Nav.tsx'
import { Description } from './components/Decsription.tsx'
import { Subscribe } from './components/Subscribe.tsx'
import { Footer } from './components/Footer.tsx'
import hero1 from './assets/hero1.jpeg'
import hero2 from './assets/hero2.jpg'
import hero3 from './assets/hero3.jpg'
import hero4 from './assets/hero4.jpg'
import hero5 from './assets/hero5.jpg'


function App() {
  // const [count, setCount] = useState(0)
  const images = [hero1, hero2, hero3, hero4, hero5]

  return (
    <>
      <Nav></Nav>
      <Hero imageUrls={images}></Hero>
      <Description></Description>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
