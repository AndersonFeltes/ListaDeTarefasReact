import { useState } from "react";

export function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className=" flex flex-col space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(evente) => setTitle(evente.target.value)}
      />
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
