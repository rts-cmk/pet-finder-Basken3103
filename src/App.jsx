import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Dogs from "./pages/Dogs"
import Doginfo from "./pages/Doginfo"



function App() {
  

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="archive/:name" element={<Dogs />} />
      <Route path="popular/:name" element={<Doginfo />} />
    </Routes>
  )
}

export default App
