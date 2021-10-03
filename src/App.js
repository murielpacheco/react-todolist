import { useEffect, useState } from 'react';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';

import './App.css';

function Todo() {
  const [items, setItems] = useState([]);

  const SAVED_ITEMS = 'savedItems';

  useEffect(() => {
    //salvar no localStorage
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    //salvar quando items for atualizado == removido ou adicionado
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  function onAddItem(text) {
    //adicionando um novo item preservando os demais
    setItems();
    let newItem = new Item(text);
    setItems([...items, newItem]);
  }

  function onItemDeleted(item) {
    // func para deletar items
    let filteredItems = items.filter((it) => it.id !== item.id); //.filter comparando os ids de todos os items com o item alvo
    //caso for diferente == mantém, se for igual deleta, logo vai deletar apenas 1
    setItems(filteredItems);
  }

  function onDone(item) {
    // func para marcar como feito
    let updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });

    setItems(updatedItems);
  }

  return (
    <div className='container'>
      <header className='header'>
        <TodoForm setItems={setItems} onAddItem={onAddItem} />
      </header>
      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
    </div>
  );
}

export default Todo;
