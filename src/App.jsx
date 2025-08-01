import { useState } from "react";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import { v4 } from "uuid";

// export function App() {
//   const [message, setMessage] = useState("Mensagem inicial");

//   return (
//     <div>
//       <h1>{message}</h1>
//       <button className="text-red-500 cursor-pointer border rounded-2xl w-2xs"
//         onClick={() => {
//           if (message === "mensagem alterada") {
//             setMessage("Mensagem inicial");
//           } else {
//             setMessage("mensagem alterada");
//           }
//         }}
//       >
//         Mudar mensagem
//       </button>
//     </div>
//   );
// }
export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar React",
      description: "Estudar React para se tornar um desenvolvedor Front End",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar C#",
      description: "Estudar C# para se tornar um desenvolvedor Back End",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
