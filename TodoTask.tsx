import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
}

export const TodoTask = ({ task }: Props) => {
  return (
    <div className="task">
      <div className="content">
        {/* <span>{task.name}</span> */}
        {/* <span>{task.email}</span> */}
        <span>{task.taskName}</span>
        <span>{task.date}</span>
      </div>
      <button>X</button>
    </div>
  );
};
