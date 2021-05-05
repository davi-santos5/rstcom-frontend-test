import React, { SyntheticEvent, useState } from "react";

import { BannerMenu } from "../components/BannerMenu";
import { TodoItem } from "../components/TodoItem";

import styles from "../styles/todoList.module.css";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (event: SyntheticEvent) => {
    event.preventDefault();
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <BannerMenu />
      <div className={styles.wrapper}>
        <h1>/Todo list</h1>

        <div className={styles.todoList}>
          <h2>Lista de tarefas</h2>
          <ul>
            {todoList.map((item, index) => (
              <TodoItem key={`${index}-${item}`}>{item}</TodoItem>
            ))}
          </ul>
        </div>

        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Escreva aqui sua tarefa..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}
