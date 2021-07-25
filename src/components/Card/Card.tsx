import { ITask } from "../../App";
import "./Card.css";

interface IProps {
  task: ITask;
  handleRemove: (id: number) => void;
}

const Card = ({ task, handleRemove }: IProps) => {
  const { title, status, memberEmail, memberName, id } = task;

  return (
    <div className="card">
      <h2>Task Title: {title}</h2>
      <h2>Member Name: {memberName}</h2>
      <h2>Member Email: {memberEmail}</h2>
      <h3 style={{ marginTop: "10px" }}>
        Status: <span className={`alert-${status} status`}>{status}</span>{" "}
      </h3>
      <button className="remove-btn" onClick={() => handleRemove(id)}>
        Remove Task
      </button>
    </div>
  );
};

export default Card;
