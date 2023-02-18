import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');
  // const [button, setButton] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
   if(inputValue.trim().length <=1) return;
    // setCategories(categories => [ inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form className="inputs-from" onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
      <button>Search</button>
    </form>
  );
};
