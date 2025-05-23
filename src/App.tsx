import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
// import Button from "./components/ui/Button"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
      {/* <Button text="Share" variant="primary" size="sm"/>
      <Button text="Share" variant="primary" size="md"/>
      <Button text="Share" variant="primary" size="lg"/> */}
    </>
  )
}

export default App
