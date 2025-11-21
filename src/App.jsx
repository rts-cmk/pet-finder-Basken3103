import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import petsLoader from "./loaders/petsLoader";
import Details from "./pages/Details";

function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      loader: petsLoader,
      hydrateFallbackElement: <p>Loading...</p>
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
