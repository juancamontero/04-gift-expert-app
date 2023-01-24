import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return; //para que no ejecute si no hay texto
    onNewCategory(inputValue.trim());
    setInputValue(""); // para borrar todo lo del input;
  };

  return (
    <form aria-label="add-cat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onChangeInput}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
