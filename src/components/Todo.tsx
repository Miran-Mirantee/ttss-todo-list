import { useState } from "react";
import TodoItem from "./TodoItem";
import type { TodoType } from "../types/todo.type";

function Todo({
  todos,
  setTodos,
  loading = false,
  error = null,
}: {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  loading?: boolean;
  error?: string | null;
}) {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const toggleDone = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newTitle: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo))
    );
  };

  const handleAddTodo = () => {
    const title = newTodoTitle.trim();
    if (!title) return;
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length ? Math.max(...prev.map((t) => t.id)) + 1 : 1,
        userId: 1,
        title,
        completed: false,
      },
    ]);
    setNewTodoTitle("");
  };

  let content;

  if (error) {
    content = <div className="text-red-500 pt-2">{error}</div>;
  } else if (loading) {
    content = <div className="text-gray-500 pt-2 text-center">Loading...</div>;
  } else {
    content = (
      <>
        <form
          className="flex items-center gap-2 py-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTodo();
          }}
        >
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            className="border px-2 py-1 rounded w-full"
            placeholder="Add new todo..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </form>
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
      </>
    );
  }

  return (
    <div className="border-2 border-dashed p-4 w-1/3 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl border-b pb-1">Todo List</h1>
      {content}
    </div>
  );
}

export default Todo;
