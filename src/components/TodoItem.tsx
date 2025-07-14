import { useState } from "react";
import type { TodoType } from "../types/todo.type";

function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = () => {
    onEdit(todo.id, editText.trim() || todo.text);
    setIsEditing(false);
  };

  return (
    <div className="border-b py-2 border-gray-400 flex items-center justify-between">
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4"
        />
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
            className="border px-2 py-1 rounded w-full"
            autoFocus
          />
        ) : (
          <span className={todo.done ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-1 ml-2">
        {isEditing ? (
          <button
            onClick={handleEditSubmit}
            className="text-sm text-green-600 hover:underline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm text-blue-600 hover:underline"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
