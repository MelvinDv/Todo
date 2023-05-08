import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Options from "./components/Options";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {

  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  /* si el id, es igual al id entonces, devuelveme la copia del todo, 
  pero la propiedad completed resivira lo contrario que tenga todo.completed, 
  si no, solo devuelve el todo */
  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const removeTodosCompleted = () => {
    setTodos(todos.filter(todo => todo.completed !== true));
  }

  const countTodos = todos.filter(todo => !todo.completed).length;

  const [filter, setFilter] = useState("all");

  const changeFilter = filter => setFilter(filter)
  
  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
    
      case "active":
        return todos.filter(todo => !todo.completed);

      case "completed":
        return todos.filter(todo => todo.completed);

      default:
        return todos;
    }
  }



	return (
		<div className="wrap">
			<div className="wrap-container">

				<Header />

        <TodoCreate createTodo={createTodo}/>

        <TodoList todos={filterTodos()} updateTodo={updateTodo}/>

        <Options filter={filter} countTodos={countTodos} removeTodosCompleted={removeTodosCompleted} changeFilter={changeFilter} />

        <p className="drag">Drag and drop to reorder list</p>

			</div>
		</div>
	);
};

export default App;
