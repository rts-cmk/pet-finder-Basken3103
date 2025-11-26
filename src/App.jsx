import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import petsLoader from "./loaders/petsLoader";
import Details from "./pages/Details";
import petDetailsLoader from "./loaders/petDetailsLoader";
import Admin from "./pages/Admin";

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
      element: <Details />,
      loader: petDetailsLoader
    },

    {
      path: '/admin',
      element: <Admin />       // <-- HER ER DEN NYE ROUTE
    }
    
  ]);
  

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
