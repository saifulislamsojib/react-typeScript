import React from "react";
import { ITask } from "../../App";
import Card from "../Card/Card";

interface IProps {
  tasks: ITask[];
  handleRemove: (id: number) => void;
}

const TodoList = ({ tasks, handleRemove }: IProps) => {
  return (
    <div>
      <h1 style={{ margin: "15px 0", color: "#376cff" }}>Task List</h1>
      {tasks.length === 0 && (
        <h2 style={{ color: "#ff3333" }}>No tasks Added</h2>
      )}
      {tasks.map((task) => (
        <Card key={task.id} task={task} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default TodoList;
