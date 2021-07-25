import React from "react";
import { ITask } from "../../App";
import "./TodoForm.css";

interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputData: ITask;
}

const TodoForm = ({
  handleSubmit,
  handleInput,
  handleStatus,
  inputData,
}: IProps) => {
  const { status } = inputData;
  return (
    <div>
      <h1>Add A Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <input
          onChange={handleInput}
          type="text"
          name="memberName"
          placeholder="Member Name"
          required
        />
        <input
          onChange={handleInput}
          type="email"
          name="memberEmail"
          placeholder="Member Email"
          required
        />
        <select className={`alert-${status}`} onChange={handleStatus}>
          <option className="alert-pending" value="pending">
            Pending
          </option>
          <option className="alert-onProcess" value="onProcess">
            On Process
          </option>
          <option className="alert-done" value="done">
            Done
          </option>
        </select>
        <input onChange={handleInput} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TodoForm;
