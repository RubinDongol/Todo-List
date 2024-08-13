import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import { TodoTask } from "./Components/TodoTask";
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  task: string;
  date: string;
}

const App = () => {
  const method = useForm<FormData>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = method;
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [task, setTask] = useState<string>("");
  // const [date, setDate] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);
  console.log(errors);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newTask = {
      name: data.name,
      email: data.email,
      taskName: data.task,
      date: data.date,
    };
    setTodo([...todo, newTask]);
    console.log(todo);
  };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   if (event.target.name === "name") {
  //     setName(event.target.value);
  //   } else if (event.target.name === "email") {
  //     setEmail(event.target.value);
  //   } else if (event.target.name === "task") {
  //     setTask(event.target.value);
  //   } else if (event.target.name === "date") {
  //     setDate(event.target.value);
  //   }
  // console.log(task);
  // console.log(deadline);
  // };
  // const addTask = (): void => {
  //   const newTask = { name: name, email: email, taskName: task, date: date };
  //   setTodo([...todo, newTask]);
  //   setName("");
  //   setEmail("");
  //   setTask("");
  //   setDate("");
  //   console.log(todo);
  // };

  return (
    <FormProvider {...method}>
      <div className="App">
        <div className="header">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputContainer">
              <label>Name</label>
              {/* <Controller
              name="name"
              control={control}
              render={({ name, onChange, value }) => (
                <input
                  name={name}
                  onChange={onChange}
                  value={value}
                  type="email"
                  placeholder="Username"
                />
              )}
            /> */}

              {/* <Controller
            name="email"
            control={control}
            render={({ name, onChange, value }) => (
              <input
                name={name}
                onChange={onChange}
                value={value}
                type="email"
                placeholder="Username"
              />
            )}
          /> */}

              {/* <Controller
              name="email"
              control={control}
              render={({ name, onChange, value }) => (
                <input
                  name={name}
                  onChange={onChange}
                  value={value}
                  type="email"
                  placeholder="Username"
                />
              )}
            /> */}
              <Controller
                defaultValue={""}
                name="task"
                control={control}
                rules={{ required: "require" }}
                render={({ field, fieldState: { error: taskError } }) => (
                  <>
                    <input {...field} type="text" placeholder="Username" />
                    {taskError && <p>{taskError?.message}</p>}
                  </>
                )}
              />
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <input {...field} type="date" placeholder="Username" />
                )}
              />
            </div>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div className="todoList">
          {todo.map((task: ITask, key: number) => {
            return (
              <div className="task">
                <TodoTask key={key} task={task} />
              </div>
            );
          })}
        </div>
      </div>
    </FormProvider>
  );
};

export default App;
