import { useLoaderData } from "react-router"

export default function Details () {

  const petDetails = useLoaderData();

  console.log(petDetails);
  

    return (

        <>
        
          <h1>{petDetails.breed}</h1>
          <img src={petDetails.image} alt={petDetails.breed} />
          <p>{petDetails.long_description}</p>
        
        </>

    )
}