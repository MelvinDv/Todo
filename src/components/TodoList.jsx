import TodoItem from "./TodoItem";

const TodoList = ({todos, updateTodo}) => {

	return (
		<div className="todos">

				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} updateTodo={updateTodo}/>
				))}
				
		</div>
	);
};

export default TodoList;