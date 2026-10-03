import React, { useState } from "react";

const AddFruitForm = ({ addFruit }: { addFruit: (name: string) => void }) => {
  const [fruitName, setFruitName] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fruitName) {
      addFruit(fruitName);
      setFruitName("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fruitName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFruitName(e.target.value)
        }
        placeholder="Enter fruit name"
      />
      <button type="submit">Add Fruit</button>
    </form>
  );
};

export default AddFruitForm;
