import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

export interface ITask {
  title: string;
  memberName: string;
  memberEmail: string;
  status: string;
  id: number;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [inputData, setInputData] = useState<ITask>({
    status: "pending",
    id: Math.random(),
  } as ITask);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputData((data) => ({ ...data, [name]: value }));
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setInputData((data) => ({ ...data, status: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { memberEmail, memberName, title } = inputData;
    if (memberEmail && memberName && title) {
      setTasks((preTask) => [...preTask, inputData]);
      e.currentTarget.reset();
      setInputData({ status: "pending", id: Math.random() } as ITask);
    } else {
      alert("Please Fill Up All Input");
    }
  };

  const handleRemove = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <TodoForm
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        handleStatus={handleStatus}
        inputData={inputData}
      />
      <TodoList tasks={tasks} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
