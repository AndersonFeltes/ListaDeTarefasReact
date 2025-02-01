import { ChevronRight, OctagonX } from "lucide-react";

  export function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  // console.log(props)
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            //precisa acionar o onClick com arounFunction passando  função como props e passando o ID da taerefa como parametro para a função identificar qual tarefa atualizar
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounde-md text-white rounded-md">
            <ChevronRight />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounde-md text-white rounded-md"
          >
            <OctagonX />
          </button>
        </li>
      ))}
    </ul>
  );
}
