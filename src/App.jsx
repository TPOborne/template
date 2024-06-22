import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import View from './components/View';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <View />
      <Footer />
    </>
  )
}

export default App
