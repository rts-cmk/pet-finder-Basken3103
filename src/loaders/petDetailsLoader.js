export default async function petDetailsLoader({ params }) {
   const id = params.petId;

   const response = await fetch(`http://localhost:4000/dogs/${id}`);

   return await response.json();
} 