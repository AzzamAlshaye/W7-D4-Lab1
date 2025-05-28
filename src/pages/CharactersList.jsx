import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    image: "",
    gender: "male",
  });
  const [loading, setLoading] = useState(true);

  const API_URL = "https://68219a92259dad2655afc3d3.mockapi.io/characters";

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => setCharacters(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddCharacter = () => {
    const { name, image, gender } = newCharacter;
    if (!name || !image) return;

    axios
      .post(API_URL, { name, image, gender })
      .then((res) => {
        setCharacters((prev) => [...prev, res.data]);
        setNewCharacter({ name: "", image: "", gender: "male" });
      })
      .catch((err) => console.error("Failed to add character:", err));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const filtered = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Character Gallery
          </h1>
          <p className="mt-2 text-gray-600">
            Browse and add your favorite characters.
          </p>
        </header>

        {/* Search */}
        <div className="relative w-full max-w-md mx-auto mb-10">
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search characters..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Character Grid or Oops */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((char) => (
              <div
                key={char.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 p-5 flex flex-col items-center"
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {char.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium 
                    ${
                      char.gender === "male"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-pink-100 text-pink-600"
                    }`}
                >
                  {char.gender.charAt(0).toUpperCase() + char.gender.slice(1)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-red-500 text-lg mt-6">
            Oops! No characters found.
          </p>
        )}

        {/* Add New Character Form */}
        <div className="mt-16 bg-white shadow-lg rounded-xl p-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Add New Character
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newCharacter.name}
              onChange={(e) =>
                setNewCharacter({ ...newCharacter, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newCharacter.image}
              onChange={(e) =>
                setNewCharacter({ ...newCharacter, image: e.target.value })
              }
            />
            <select
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newCharacter.gender}
              onChange={(e) =>
                setNewCharacter({ ...newCharacter, gender: e.target.value })
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button
              onClick={handleAddCharacter}
              className="mt-4 bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Add Character
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
