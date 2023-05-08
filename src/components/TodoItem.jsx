import IconCheck from './icons/IconCheck'

const TodoItem = ({todo, updateTodo}) => {

	const {id, text, completed} = todo;

	return (
		<article>
			<span onClick={() => updateTodo(id)} className={completed ? "article-circle-completed" : "article-circle"}>
				{completed && <IconCheck />}	
				
			</span>
			<p>{text}</p>
		</article>
	);
};

export default TodoItem;

/* Si le doy click se tiene que actualizar "completed" a true
	

*/
