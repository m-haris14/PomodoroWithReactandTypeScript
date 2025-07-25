type tasking = {
  id:number;
  todoTask: string;
  time:number;
}

interface EditFormProps {
  task: tasking;
  onSubmit : (e: React.FormEvent<HTMLFormElement>)=>void;
  editTime : (e: React.ChangeEvent<HTMLInputElement>)=> void;
  onClick : (id:number)=>void;
}

const EditForm = ({task, onSubmit, editTime, onClick }: EditFormProps) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="inputForm">
        <div className="col-auto">
          <input
            type="number"
            className="form-control numberInput mb-3 border-0 border-bottom bg-transparent text-white"
            max={25}
            onChange={editTime}
            id="validationTooltip01"
            placeholder={task.time?.toString()}
            required
          />
        </div>
        <button
          type="submit"
          onClick={()=>onClick(task.id)}
          className="btn btn-primary mt-3 w-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
