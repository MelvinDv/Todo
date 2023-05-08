import { useState } from "react";

const TodoCreate = ({createTodo}) => {

	const [text, setText] = useState('');

	const handleAddTodo = (e) => {
		e.preventDefault();

		if (!text.trim()) {
			return setText("");
		}

		createTodo(text);
		setText("");
	}

	return (
		<form onSubmit={handleAddTodo} className="main">
			<span className="main-circle"></span>
			<input className="main-new" type="text" placeholder="Create a new todo..."
			value={text} onChange={(e) => setText(e.target.value)} />
		</form>
	);
};

export default TodoCreate;
