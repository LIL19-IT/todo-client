import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Heading } from '../components/Heading';
import { Loading } from '../components/Loading';
import { TodoList } from "../components/TodoList";
import { AddTodo } from "../components/AddTodo";
import axios from "../axios";

export function HomePage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    try {
      const response = await axios.get('todo');
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const addTodo = async (title) => {
    try {
      await axios.post('todo/add', {title});
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="HomePage">

      <Heading user={user} logout={logout} />
      <AddTodo addTodo={addTodo} />
      {loading && <Loading />}
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  )
}
