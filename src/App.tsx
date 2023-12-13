import { Routes, Route, Link } from 'react-router-dom'
import FitnessPage from './components/FitnessPage';
import NutritionPage from './components/NutritionPage';

function App() {
  return (
    <>
    {/* <nav className="navbar"> */}
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/fitness'}>Fitness</Link>
      <Link to={'/nutrition'}>Nutrition</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fitness" element={<FitnessPage />} />
      <Route path="/nutrition" element={<NutritionPage />} />
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
