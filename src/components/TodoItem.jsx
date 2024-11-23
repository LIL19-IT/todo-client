
export function TodoItem({ _id, title, completed, removeTodo, toggleCompleted }) {
    return (
        <div className={completed ? 'todo active' : 'todo'}>
            <p className="text">{title}</p>

            <div className="icons">
                <i className="fa-solid fa-check" onClick={() => toggleCompleted(_id)}></i>
                <i className="fa-solid fa-trash" onClick={() => removeTodo(_id)}></i>
            </div>
        </div>
    )
}
