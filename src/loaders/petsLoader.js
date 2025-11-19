export default async function petsLoader() {
   const response = await fetch('http://localhost:4000/dogs');

   return response.json();

}