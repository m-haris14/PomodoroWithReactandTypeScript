interface Buttons {
    setShow : (active: string)=>void;
    setActive : (active: string)=>void;
    active : string;
}

const Buttons = ({ setShow, setActive, active }: Buttons) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button
        type="button"
        onClick={() => {
          setActive("task");
          setShow("pomodoro");
        }}
        className={`${active === "task" ? "btn_active" : "btns"}`}
      >
        Pomodoro
      </button>
      <button
        type="button"
        onClick={() => {
          setActive("start");
          setShow("break");
        }}
        className={`${active === "start" ? "btn_active" : "btns"}`}
      >
        Break
      </button>
      <button
        type="button"
        onClick={() => {
          setActive("edit");
          setShow("edit");
        }}
        className={`${active === "edit" ? "btn_active" : "btns"}`}
      >
        Edit
      </button>
    </div>
  );
};

export default Buttons;
