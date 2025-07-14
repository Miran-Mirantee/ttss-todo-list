import { useState } from "react";
import TodoItem from "./TodoItem";
import type { TodoType } from "../types/todo.type";

function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Walk dog", done: true },
    { id: 3, text: "Read book", done: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  const toggleDone = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const handleAddTodo = () => {
    const text = newTodoText.trim();
    if (!text) return;
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length ? Math.max(...prev.map((t) => t.id)) + 1 : 1,
        text,
        done: false,
      },
    ]);
    setNewTodoText("");
  };

  return (
    <div className="border-2 border-dashed p-4 min-w-1/3 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl border-b pb-1">Todo List</h1>
      <div className="flex items-center gap-2 py-2">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
          className="border px-2 py-1 rounded w-full"
          placeholder="Add new todo..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col py-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleDone}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
