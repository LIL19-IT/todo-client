import { TodoItem } from "./TodoItem";
import axios from "../axios";

export function TodoList({ todos, setTodos }) {
    const toggleCompleted = async (id) => {
        try {

            await axios.put(`todo/edit/${id}`);

            const newTodos = todos.map(elem => {
                if (elem._id === id) {
                    return { ...elem, completed: !elem.completed }
                }

                return elem;
            })

            setTodos(newTodos);

        } catch (error) {
            console.log(error);
        }
    }

    const removeTodo = async (id) => {
        await axios.delete(`todo/remove/${id}`);
        const newTodos = todos.filter(elem => elem._id !== id);
        setTodos(newTodos);
    }

    return (
        <div className="TodoList">
            {
                todos.map(elem => (
                    <TodoItem
                        key={elem._id}
                        {...elem}
                        removeTodo={removeTodo}
                        toggleCompleted={toggleCompleted}
                    />
                ))
            }
        </div>
    )
}
