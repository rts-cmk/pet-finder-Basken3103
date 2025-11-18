import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/details/:petId',
      element: <Details/>
    }
  ]);
  

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
