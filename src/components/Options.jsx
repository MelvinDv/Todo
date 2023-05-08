const Options = ({countTodos, removeTodosCompleted, changeFilter, filter}) => {

	return (
		<section className="options">
			<p className="options-items"> {countTodos} items left </p>

			<button onClick={() => changeFilter("all")} className={filter === "all" ? "options-tools-select" : "options-tools"}>All</button>
			<button onClick={() => changeFilter("active")} className={filter === "active" ? "options-tools-select" : "options-tools"}>Active</button>
			<button onClick={() => changeFilter("completed")} className={filter === "completed" ? "options-tools-select" : "options-tools"}>Completed</button>

			<button onClick={() => removeTodosCompleted()} className="options-clear">Clear completed</button>
		</section>
	);
};

export default Options;
