import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputToAdd = inputValue.trim();
    if (inputToAdd.length <= 1) return; //para que no ejecute si no hay texto
    onNewCategory(inputToAdd);
    setInputValue(""); // para borrar todo lo del input;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onChangeInput}
      />
    </form>
  );
};
