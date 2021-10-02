import { useState } from 'react';

function TodoForm(props) {
  const [text, setText] = useState(); //estado para o texto dentro do input

  function handleChange(event) {
    let textItem = event.target.value;
    setText(textItem); //texto do input == texto do item da lista
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText('');
    }
  }
  return (
    <div>
      <form action='' className='todoForm'>
        <input
          onChange={handleChange}
          type='text'
          value={text}
          placeholder='Add a new item '
        />
        <button onClick={addItem}>+</button>
      </form>
    </div>
  );
}

export default TodoForm;
