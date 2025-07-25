import "./singleTask.css";
import Buttons from "./buttons.tsx";
import EditForm from "../InputForm/editForm";
import Clock from "./clock";

type tasks = {
  id:number;
  todoTask: string;
  time:number;
}

interface SingleTask{
  task:tasks[];
  onSubmit:(e: React.FormEvent<HTMLFormElement>)=>void;
  editTime:(e: React.ChangeEvent<HTMLInputElement>)=> void;
  onClick:(id:number)=>void;
  show:string;
  setShow:(show:string) => void;
  active:string;
  setActive:(active:string) => void;
}

const SingleTask = ({task, onSubmit, editTime, onClick, show, setShow, active, setActive}:SingleTask) => {
  return (
    <div className="d-flex flex-column">
      <Buttons setShow={setShow} active={active} setActive={setActive} />
      <div className="wrapper">
        {show === "pomodoro" && <Clock timer={task[0].time*6000} />}
        {show === "break" && <Clock timer={5*6000} />}
        {show === "edit" && (
          <EditForm
            task={task[0]}
            onSubmit={onSubmit}
            editTime={editTime}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};

export default SingleTask;