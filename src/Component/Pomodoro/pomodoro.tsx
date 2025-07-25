import InputTask from "../InputTask/InputTask";
import "./pomodoro.css";

const Pomodoro = () => {
  return (
    <>
      <div className="HeaderWrapper">
        <div className="Header">
          <h1 className="title text-white fs-1 fw-bold">Pomodoro Timer</h1>
          <p className="card-text text-white text-center my-3">Create Tasks & Specify time for them !</p>
          <InputTask />
        </div>
      </div>
    </>
  );
};

export default Pomodoro;
