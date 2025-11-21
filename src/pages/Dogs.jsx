import { useLoaderData } from "react-router";

export default function Home () {

  const pets = useLoaderData();
   
  console.log(pets);

  return (
    <>
      <h1>Dogs</h1>

      {pets.map(pet => <img key={pet.id} src={pet.image} alt={pet.breed} />)}
    </>
          
  )

}