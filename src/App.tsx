import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import type { TodoType } from "./types/todo.type";

function App() {
  const [todoData, setTodoData] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    fetch("https://jsonplaceholder.typicode.com/todos1230?_limit=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
      })
      .then(setTodoData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   console.log(todoData);
  // }, [todoData]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Todo
        todos={todoData}
        setTodos={setTodoData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
