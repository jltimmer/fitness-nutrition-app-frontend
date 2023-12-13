import { Routes, Route, Link } from 'react-router-dom'
import Fitness from './components/Fitness';

function App() {
  return (
    <>
    {/* <nav className="navbar"> */}
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/exercises'}>Exercises</Link>
      <Link to={'/nutrition'}>Nutrition</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercises" element={<Fitness />}
      />
      <Route path="/nutrition" element={
        <><p>Nutrition page stub</p></>
      } />
    </Routes>
    </>
  )
}

function Home() {
  return (
    <p>Home</p>
  )
}

export default App
