import { useEffect, useState } from "react";
import api from "../api";
import AddFruitForm from "./AddFruitForm";

interface Fruit {
  name: string;
}

const Fruits = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const fetchFruits = async () => {
    try {
      const response = await api.get("/fruits");
      setFruits(response.data.fruits);
    } catch (error) {
      console.error("Error fetching fruits:", error);
    }
  };
  const addFruit = async (fruitName: string) => {
    try {
      await api.post("/fruits", { name: fruitName });
      await fetchFruits();
    } catch (error) {
      console.error("Error adding fruit:", error);
    }
  };
  useEffect(() => {
    fetchFruits();
  }, []);
  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit.name}</li>;
        })}
      </ul>
      <AddFruitForm addFruit={addFruit} />
    </div>
  );
};

export default Fruits;
