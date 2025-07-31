import { ChevronRight, OctagonX } from "lucide-react";
import { useNavigate } from "react-router-dom";

// export function Tasks(props) {
//   return (
//     <h1>
//       {props.tasks.map((tasks) => (
//         <p>{tasks.title}</p>
//       ))}
//     </h1>
//   );
// }

export function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`);
  }
  // console.log(props)
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            //precisa acionar o onClick com arounFunction passando  função como props e passando o ID da tarefa como parametro para a função identificar qual tarefa atualizar
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            className="bg-slate-400 p-2 rounde-md text-white rounded-md"
            onClick={() => onSeeDetailsClick(task)}
          >
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
