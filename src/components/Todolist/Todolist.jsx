import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import List from '../List/List';
import styles from '../Todo.module.css';

const Todolist = () => {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const listInLocalStorage = localStorage.getItem('todoList');
    if (listInLocalStorage) {
      setList(JSON.parse(listInLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);

  const addInputHandler = () => {
    if (inputText.trim()) {
      const items = [...list];
      items.push({
        item: inputText,
        isDone: false,
        isEdit: false,
        editedItem: inputText,
      });
      setList(items);
    }
    setInputText('');
  };

  const keyHandle = (e) => {
    if (e.keyCode === 13) {
      addInputHandler();
    }
  };

  const changeHandler = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  const isDoneHandler = (itemIndex) => {
    const items = [...list];
    items[itemIndex].isDone = true;
    setList(items);
    console.log(list);
  };

  const itemDeleteHandler = (itemIndex) => {
    const items = [...list];
    items.splice(itemIndex, 1);
    setList(items);
  };

  const editBtnHandler = (itemIndex) => {
    const items = [...list];
    items[itemIndex].isEdit = true;
    setList(items);
  };

  const cancelBtnHandler = (itemIndex) => {
    const items = [...list];
    items[itemIndex].isEdit = false;
    items[itemIndex].editedItem = items[itemIndex].item;
    setList(items);
  };

  const editInputHandler = (e, itemIndex) => {
    const value = e.target.value;
    const items = [...list];
    items[itemIndex].editedItem = value;
    setList(items);
  };

  const editSaveHandler = (itemIndex) => {
    if (list[itemIndex].editedItem.trim()) {
      const items = [...list];
      items[itemIndex].item = items[itemIndex].editedItem;
      items[itemIndex].isEdit = false;
      setList(items);
    }
  };

  return (
    <div className={styles.Todolist}>
      <div className={styles.container}>
        <h1>To Do List</h1>
        <Input
          handleChange={changeHandler}
          value={inputText}
          handleKeyUp={keyHandle}
        />
        <Button handleClickBtn={addInputHandler} btnText='Add List' />
        <List
          data={list}
          isDoneHandler={isDoneHandler}
          itemDeleteHandler={itemDeleteHandler}
          editBtnHandler={editBtnHandler}
          cancelBtnHandler={cancelBtnHandler}
          editInputHandler={editInputHandler}
          editSaveHandler={editSaveHandler}
        />
      </div>
    </div>
  );
};

export default Todolist;
