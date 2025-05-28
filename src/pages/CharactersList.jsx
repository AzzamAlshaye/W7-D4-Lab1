// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function CharactersList() {
//   const [characters, setCharacters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [newCharacter, setNewCharacter] = useState({
//     name: "",
//     image: "",
//     gender: "male",
//   });

//   useEffect(() => {
//     axios
//       .get("https://68219a92259dad2655afc3d3.mockapi.io/characters")
//       .then((res) => setCharacters(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const filteredChars = characters.filter((char) =>
//     char.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleAddCharacter = () => {
//     if (newCharacter.name && newCharacter.image) {
//       const newEntry = { ...newCharacter, id: Date.now().toString() };
//       setCharacters((prev) => [...prev, newEntry]);
//       setNewCharacter({ name: "", image: "", gender: "male" });
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Search Field */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search characters..."
//           className="w-full border border-gray-300 rounded p-2"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Character Grid or Oops */}
//       {filteredChars.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {filteredChars.map((char) => (
//             <div key={char.id} className="border rounded p-4 text-center">
//               <img
//                 src={char.image}
//                 alt={char.name}
//                 className="mx-auto mb-2 w-full h-32 object-cover rounded"
//               />
//               <h3 className="font-semibold">{char.name}</h3>
//               <p className="text-sm text-gray-600">{char.gender}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-red-500">Oops! No characters found.</p>
//       )}

//       {/* Add New Character Form */}
//       <div className="mt-6 border-t pt-4">
//         <h2 className="text-xl font-bold mb-2">Add a New Character</h2>
//         <div className="flex flex-col space-y-2">
//           <input
//             type="text"
//             placeholder="Name"
//             className="border p-2 rounded"
//             value={newCharacter.name}
//             onChange={(e) =>
//               setNewCharacter({ ...newCharacter, name: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             className="border p-2 rounded"
//             value={newCharacter.image}
//             onChange={(e) =>
//               setNewCharacter({ ...newCharacter, image: e.target.value })
//             }
//           />
//           <select
//             className="border p-2 rounded"
//             value={newCharacter.gender}
//             onChange={(e) =>
//               setNewCharacter({ ...newCharacter, gender: e.target.value })
//             }
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             onClick={handleAddCharacter}
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//           >
//             Add a New Character
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
