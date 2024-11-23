import { useState } from "react";

export function AddTodo({ addTodo }) {
    const [input, setInput] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (!input.trim()) {
            return;
        }

        addTodo(input);
        setInput('');
    }

    return (
        <form className="AddTodo" onSubmit={submitHandler}>
            <input 
              required
              type="text" 
              value={input} 
              placeholder="your todo..." 
              onChange={e => setInput(e.target.value)} 
            />

            <input type="submit" value="add" className="btn" />
        </form>
    )
}
