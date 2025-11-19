import { Navigate, useLoaderData } from "react-router";

export default function Home () {

  const pets = useLoaderData();

  const userCheck = localStorage.getItem("firstVisit");
  console.log(userCheck);
  
  if (userCheck == null) {
    return <Navigate to={"/onboarding"}/> 
  } 
   
  console.log(pets);

  return (
    <>
      
      <h1>Home</h1>

      {pets.map(pet => <img key={pet.id} src={pet.image} alt={pet.breed} />)}
    </>
          
  )

}